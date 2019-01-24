import { fromJS } from 'immutable';
import productsReducer from './products';
import * as productsAction from '../actions/products';
import initialState from './initialState';

describe('products reducer', () => {
  it('should return initial state', () => {
    const productsInitialState = initialState.get('products');
    expect(productsReducer()).toEqual(productsInitialState);
  });

  describe(`${productsAction.GET_PRODUCTS_SUCCESS}`, () => {
    const products = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ];
    const state = productsReducer(initialState.get('products'), {
      type: productsAction.GET_PRODUCTS_SUCCESS,
      payload: {
        products,
      },
    });
    it('should add the products', () => {
      expect(state).toEqual(fromJS(products));
    });
  });
});
