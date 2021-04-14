import React from 'react';
import './TodoList.css';
import TodoItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import {removeTodo, completeTodo} from './actions';

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);