export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = todo => ({
  type: CREATE_TODO,
  payload : { todo }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const completeTodo = todo => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { todo }
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
});

export const LOAD_TODOS_FAILED = 'LOAD_TODOS_FAILED';
export const loadTodosFailed = text => ({
  type: LOAD_TODOS_FAILED
});

