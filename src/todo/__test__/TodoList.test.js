import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';
import mockData from '../mockData';

describe('Todo list component', () => {
  it('should show title of todos', () => {
    render(<TodoList todos={mockData} />);

    mockData.forEach((data) =>
      expect(screen.getByText(data.title)).toBeInTheDocument()
    );
  });
});
