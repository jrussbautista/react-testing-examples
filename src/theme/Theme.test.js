import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import Theme from './Theme';

test('renders with light styles for the light theme', () => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider initialTheme='light'>{children}</ThemeProvider>;
  };

  render(<Theme />, { wrapper: Wrapper });

  const container = screen.getByTestId('theme-container');

  expect(container).toHaveStyle(`
        background-color: white;
        color: black
    `);
});

test('renders with dark styles for the dark theme', () => {
  const Wrapper = ({ children }) => {
    return <ThemeProvider initialTheme='dark'>{children}</ThemeProvider>;
  };

  render(<Theme />, { wrapper: Wrapper });

  const container = screen.getByTestId('theme-container');

  expect(container).toHaveStyle(`
          background-color: black;
          color: white
      `);
});
