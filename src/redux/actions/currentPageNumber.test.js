import configureStore from 'redux-mock-store';
import * as currentPageNumberAction from './currentPageNumber';

const mockStore = configureStore();

describe('current Page Number actions', () => {
  describe('setCurrentPageNumber()', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it(`should dispatch ${currentPageNumberAction.SET_CURRENT_PAGE_NUMBER}`, () => {
      const pageNumber = Math.ceil((Math.random() * 100) + 1);
      const expectedAction = {
        type: currentPageNumberAction.SET_CURRENT_PAGE_NUMBER,
        payload: {
          pageNumber,
        },
      };
      store.dispatch(currentPageNumberAction.setCurrentPageNumber(pageNumber));
      const action = store.getActions()[0];
      expect(action).toEqual(expectedAction);
    });
  });
});
