import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('Display correct initial count', () => {
    render(<Counter />);

    screen.getByText('Current Count: 0');
  });

  test('Counter increments by 1', () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const countText = screen.getByText('Current Count: 0');

    fireEvent.click(incrementBtn);

    expect(countText.textContent).toBe('Current Count: 1');

    fireEvent.click(incrementBtn);

    expect(countText.textContent).toBe('Current Count: 2');
  });

  test('Counter decrements by 1', () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /decrement/i });
    const countText = screen.getByText('Current Count: 0');

    fireEvent.click(incrementBtn);

    expect(countText.textContent).toBe('Current Count: -1');

    fireEvent.click(incrementBtn);

    expect(countText.textContent).toBe('Current Count: -2');
  });
});
