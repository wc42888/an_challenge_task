import currentPageNumberReducer from './currentPageNumber';
import * as currentPageNumberAction from '../actions/currentPageNumber';
import initialState from './initialState';

describe('current page number reducer', () => {
  it('should return initial state', () => {
    const currentPageNumberInitialState = initialState.get('currentPageNumber');
    expect(currentPageNumberReducer()).toEqual(currentPageNumberInitialState);
  });

  describe(`${currentPageNumberAction.SET_CURRENT_PAGE_NUMBER}`, () => {
    const pageNumber = Math.ceil((Math.random() * 100) + 1);
    const state = currentPageNumberReducer(initialState.get('currentPageNumber'), {
      type: currentPageNumberAction.SET_CURRENT_PAGE_NUMBER,
      payload: {
        pageNumber,
      },
    });
    it('should set the current page number correctly', () => {
      expect(state).toEqual(pageNumber);
    });
  });
});
