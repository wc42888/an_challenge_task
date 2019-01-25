import { combineReducers } from 'redux-immutable';
import productsReducer from './products';
import itemsPerPageReducer from './itemsPerPage';

export default combineReducers({
  products: productsReducer,
  itemsPerPage: itemsPerPageReducer,
});
