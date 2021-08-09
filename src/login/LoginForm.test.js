import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import LoginForm from './LoginForm';

const buildLoginForm = (overrides) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  };
};

test('submitting the form calls onSubmit with right data', () => {
  const handleSubmit = jest.fn();

  render(<LoginForm onSubmit={handleSubmit} />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const buttonSubmit = screen.getByRole('button', { name: /submit/i });

  const { username, password } = buildLoginForm();

  userEvent.type(usernameField, username);
  userEvent.type(passwordField, password);
  userEvent.click(buttonSubmit);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({ username, password });
});
