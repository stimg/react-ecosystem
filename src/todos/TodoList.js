import React, { useEffect } from 'react';
import './TodoList.css';
import TodoItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import {
  loadTodos,
  markAsCompletedRequest,
  removeTodoRequest
} from './thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingText = <div>Loading...</div>;
  const content = <div className="list-wrapper">
    <NewTodoForm/>
    {todos.map(todo => <TodoItem
      todo={todo}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}/>)}
  </div>;
  return isLoading ? loadingText : content;
};

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);