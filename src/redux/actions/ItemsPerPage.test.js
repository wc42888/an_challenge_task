import configureStore from 'redux-mock-store';
import * as itemsPerPageAction from './itemsPerPage';

const mockStore = configureStore();

describe('items per page actions', () => {
  describe('setItemsPerPage()', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it(`should dispatch ${itemsPerPageAction.SET_ITEMS_PER_PAGE}`, () => {
      const itemsPerPage = Math.ceil((Math.random() * 100) + 1);
      const expectedAction = {
        type: itemsPerPageAction.SET_ITEMS_PER_PAGE,
        payload: {
          itemsPerPage,
        },
      };
      store.dispatch(itemsPerPageAction.setItemsPerPage(itemsPerPage));
      const action = store.getActions()[0];
      expect(action).toEqual(expectedAction);
    });
  });
});
