import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('renders todo information', () => {
    const todo = {
      id: 1,
      title: 'Test todo',
      isCompleted: false,
    };

    render(<TodoItem todo={todo} />);

    const title = screen.getByText(todo.title);
    const btnDelete = screen.getByRole('button', { name: /delete/i });

    expect(title).toBeInTheDocument();
    expect(btnDelete).toBeInTheDocument();
  });

  it('todo title should have linethrough', () => {
    const todo = {
      id: 1,
      title: 'Test todo',
      isCompleted: true,
    };

    render(<TodoItem todo={todo} />);

    const title = screen.getByText(todo.title);

    expect(title).toHaveClass('completed');
  });

  it('todo title should not have linethrough', () => {
    const todo = {
      id: 1,
      title: 'Test todo',
      isCompleted: false,
    };

    render(<TodoItem todo={todo} />);

    const title = screen.getByText(todo.title);

    expect(title).not.toHaveClass('completed');
  });
});
