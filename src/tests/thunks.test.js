import 'node-fetch';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import { expect } from 'chai';
import { displayAlert, loadTodos } from '../todos/thunks';

describe('Test loadTodos() thunk', () => {
  it('This dispatches correct actions on the success scenario', async () => {
    const fakeDispatch = sinon.spy();
    const fakeTodos = [{ text: '1' }, { text: '2' }];
    fetchMock.get('http://localhost:8080/todos', fakeTodos);

    const expectedFirstAction = {
      type: 'LOAD_TODOS_IN_PROGRESS'
    };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: {
        todos: fakeTodos
      }
    }

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    fetchMock.reset();
  });

  it('This dispatches correct actions on the fail scenario', async () => {
    const fakeDispatch = sinon.spy();
    fetchMock.get('http://localhost:8080/todos', null);

    const expectedFirstAction = {
      type: 'LOAD_TODOS_IN_PROGRESS'
    };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_FAILED'
    }

    await loadTodos()(fakeDispatch);

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
    expect(fakeDispatch.getCall(2).args[0]).to.be.a('function');

    fetchMock.reset();
  })

})