import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Todo from '../Todo';
import mockData from '../mockData';

const server = setupServer(
  rest.get('/api/todos', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Todo', () => {
  it('Display loading text while api request is in progress and remove loading text after api request is done', async () => {
    render(<Todo />);
    const loadingElement = screen.getByText('Loading');

    expect(loadingElement).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading'));
  });

  it('Display list of todos from an API', async () => {
    render(<Todo />);

    await waitFor(() => screen.getAllByRole('listitem'));

    const todoListItems = screen.getAllByRole('listitem');

    expect(todoListItems).toHaveLength(mockData.length);
  });

  it('Display error message when api request is failed', async () => {
    server.use(
      rest.get('/api/todos', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Todo />);

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Failed to display todos'
    );

    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });
});
