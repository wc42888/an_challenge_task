import { SET_ITEMS_PER_PAGE } from '../actions/itemsPerPage';
import initialState from './initialState';

export default function itemsPerPageReducer(state = initialState.get('itemsPerPage'), action = {}) {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE:
      return action.payload.itemsPerPage;
    default:
      return state;
  }
}
