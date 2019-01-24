import itemsPerPageReducer from './itemsPerPage';
import * as itemsPerPageAction from '../actions/itemsPerPage';
import initialState from './initialState';

describe('items per page reducer', () => {
  it('should return initial state', () => {
    const itemsPerPageInitialState = initialState.get('itemsPerPage');
    expect(itemsPerPageReducer()).toEqual(itemsPerPageInitialState);
  });

  describe(`${itemsPerPageAction.SET_ITEMS_PER_PAGE}`, () => {
    const itemsPerPage = Math.ceil((Math.random() * 100) + 1);
    const state = itemsPerPageReducer(initialState.get('itemsPerPage'), {
      type: itemsPerPageAction.SET_ITEMS_PER_PAGE,
      payload: {
        itemsPerPage,
      },
    });

    it('should set the items per page correctly', () => {
      expect(state).toEqual(itemsPerPage);
    });
  });
});
