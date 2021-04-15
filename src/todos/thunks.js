import {
  loadTodosInProgress,
  loadTodosFailed,
  loadTodosSuccess,
  createTodo,
  removeTodo,
  completeTodo
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    const result = await fetch('http://localhost:8080/todos');
    const todos = await result.json();

    dispatch(loadTodosSuccess(todos));

  } catch (e) {
    dispatch(loadTodosFailed());
    dispatch(displayAlert(e));
  }

}

export const addTodoRequest = text => async dispatch => {
  try {
    const body = JSON.stringify({ text });
    const result = await fetch('http://localhost:8080/todos', {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const todo = await result.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const removeTodoRequest = id => async dispatch => {
   try {
    const result = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete'
    });
    const todo = await result.json();
    dispatch(removeTodo(todo.id));
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const markAsCompletedRequest = id => async dispatch => {
  try {
    const result = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      method: 'post'
    });
    const todo = await result.json();
    dispatch(completeTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const displayAlert = e => () => {
  window.alert(e.message);
}