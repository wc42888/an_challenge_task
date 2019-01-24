import initialState from './initialState';
import { SET_CURRENT_PAGE_NUMBER } from '../actions/currentPageNumber';

export default function currentPageNumberReducer(state = initialState.get('currentPageNumber'), action = {}) {
  switch (action.type) {
    case SET_CURRENT_PAGE_NUMBER:
      return action.payload.pageNumber;
    default:
      return state;
  }
}
