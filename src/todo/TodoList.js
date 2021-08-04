import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemoveTodoItem }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodoItem={onRemoveTodoItem}
        />
      ))}
    </ul>
  );
};

export default TodoList;
