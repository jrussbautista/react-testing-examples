import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    async function fetchData() {
      try {
        const result = await fetch('/api/todos', { signal });
        const response = await result.json();
        setTodos(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <AddTodoForm />
      {loading && <p>Loading</p>}

      {error && <div role='alert'>Failed to display todos</div>}

      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
