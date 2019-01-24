import { combineReducers } from 'redux-immutable';
import productsReducer from './products';
import currentPageNumberReducer from './currentPageNumber';
import itemsPerPageReducer from './itemsPerPage';

export default combineReducers({
  products: productsReducer,
  currentPageNumber: currentPageNumberReducer,
  itemsPerPage: itemsPerPageReducer,
});
