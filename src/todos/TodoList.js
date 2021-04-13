import React from 'react';
import './TodoList.css';
import TodoItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({todos = [{ text: 'Hello!'}]}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoItem todo={todo} />)}
  </div>
);

export default TodoList;