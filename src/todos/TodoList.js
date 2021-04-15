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
import {
  getTodos,
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos
} from './selectors';

const TodoList = ({ incompleteTodos, completeTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingText = <div>Loading...</div>;
  const content = <div className="list-wrapper">
    <NewTodoForm/>
    <h3>Incompleted:</h3>
    {incompleteTodos.map(todo => <TodoItem
      todo={todo}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}/>)}
    <h3>Completed:</h3>
    {completeTodos.map(todo => <TodoItem
      todo={todo}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}/>)}
  </div>;
  return isLoading ? loadingText : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  incompleteTodos: getIncompleteTodos(state),
  completeTodos: getCompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);