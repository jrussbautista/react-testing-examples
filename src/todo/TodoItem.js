import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onRemoveTodoItem }) => {
  return (
    <li>
      <p className={`${todo.isCompleted ? styles.completed : ''}`}>
        {todo.title}
      </p>
      <button
        type='button'
        aria-label='delete'
        onClick={() => onRemoveTodoItem(todo)}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
