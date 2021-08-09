import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import Todo from './Todo';
import mockData from './mockData';

const server = setupServer(
  rest.get('/api/todos', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Todo', () => {
  it('Display loading text while fetching todos', async () => {
    render(<Todo />);
    const loadingElement = screen.getByText('Loading');

    expect(loadingElement).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading'));
  });

  it('Successfully loads and display list of todos', async () => {
    render(<Todo />);

    await waitFor(() => screen.getAllByRole('listitem'));

    const todoListItems = screen.getAllByRole('listitem');

    expect(todoListItems).toHaveLength(mockData.length);
  });

  it('Display error message when there is an problem getting todos', async () => {
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

  it('successfully removed todo item from list', async () => {
    render(<Todo />);
    await waitFor(() => screen.getAllByRole('listitem'));

    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    const listItems = screen.getAllByRole('listitem');

    userEvent.click(deleteButtons[0]);

    expect(listItems[0]).not.toBeInTheDocument();

    expect(screen.getAllByRole('listitem')).toHaveLength(mockData.length - 1);
  });
});
