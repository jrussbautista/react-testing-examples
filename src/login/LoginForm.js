import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields);
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={fields.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          id='password'
          name='password'
          value={fields.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
