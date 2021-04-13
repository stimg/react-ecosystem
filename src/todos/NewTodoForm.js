import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
  const [InputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        placeholder="Type your new toso here"
        type="text"
        value={InputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  )
}

export default NewTodoForm;