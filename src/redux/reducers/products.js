import { fromJS } from 'immutable';
import initialState from './initialState';
import { GET_PRODUCTS_SUCCESS } from '../actions/products';

export default function productsReducer(state = initialState.get('products'), action = {}) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return fromJS(action.payload.products);
    default:
      return state;
  }
}
