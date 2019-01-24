import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as productsAcion from './products';
import getProductsRequest from '../../lib/network/api';

jest.mock('../../lib/network/api');
// import * as api from '../../lib/network/api';
//
// jest.mock('../../lib/network/api', () => ({
//   getProductsRequest: jest.fn(),
// }));

window.alert = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('products actions', () => {
  describe('getProducts()', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it(`should dispatch ${productsAcion.GET_PRODUCTS_REQUEST}`, () => {
      store.dispatch(productsAcion.getProducts()).then(() => {
        const expectedAction = {
          type: productsAcion.GET_PRODUCTS_REQUEST,
        };

        const action = store.getActions()[0];

        expect(action).toEqual(expectedAction);
      });
    });

    it(`should dispatch ${productsAcion.GET_PRODUCTS_SUCCESS} on success`, () => {
      const products = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ];

      getProductsRequest.mockImplementationOnce(() => Promise.resolve({ data: products }));

      return store.dispatch(productsAcion.getProducts()).then(() => {
        const expectedAction = {
          type: productsAcion.GET_PRODUCTS_SUCCESS,
          payload: {
            products,
          },
        };

        const action = store.getActions()[1];

        expect(action).toEqual(expectedAction);
      });
    });
  });
});
