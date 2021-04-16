import { expect } from 'chai';
import { getCompleteTodos } from '../selectors';

describe('This test selectors.', () => {
  it('Returns completed todos.', () => {
    const todos = [
      {
        text: '1',
        isCompleted: true
      },
      {
        text: '2',
        isCompleted: false
      },
      {
        text: '3',
        isCompleted: false
      },
    ];
    const expectedTodos = [
      {
        text: '1',
        isCompleted: true
      }
    ];

    // resultFunc() calls the last function in the selector (combiner)
    const actual = getCompleteTodos.resultFunc(todos);

    expect(actual).to.deep.equal(expectedTodos);
  });
});