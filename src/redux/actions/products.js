import getProductsRequest from '../../lib/network/api';
import showRequestError from '../../lib/network/showRequestError';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const { data: products } = await getProductsRequest();
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: {
        products,
      },
    });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_FAILURE });
    showRequestError(e);
  }
};
