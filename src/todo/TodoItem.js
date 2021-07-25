import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.title}
      </p>
    </li>
  );
};

export default TodoItem;
