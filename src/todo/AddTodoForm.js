import React from 'react';

const AddTodoForm = () => {
  return (
    <form>
      <div>
        <label htmlFor='task'>Task</label>
        <input type='text' name='task' id='task' />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default AddTodoForm;
