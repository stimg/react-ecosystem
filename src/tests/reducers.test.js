import { expect } from 'chai';
import { todos } from '../todos/reducers';

describe('This tests todo reducer', () => {
  it ('Test CREATE_TODO action', () => {
    const todo = {
      text: 'Test todo',
      isLoading: false
    }
    const action = {
      type: 'CREATE_TODO',
      payload: {
        todo: todo
      }
    }
    const initState = {
      isLoading: false,
      data: []
    }
    const expected = {
      isLoading: false,
      data: [todo]
    }

    const actual = todos(initState, action);

    expect(actual).to.deep.equal(expected);
  })
});