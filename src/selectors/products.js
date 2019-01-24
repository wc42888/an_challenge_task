import { createSelector } from 'reselect';

const getAllProducts = state => state.get('products');
const getCurrentPageNumber = state => state.get('currentPageNumber');
const getItemsPerpage = state => state.get('itemsPerPage');

export const getDisplayedProducts = createSelector(
  [getAllProducts, getCurrentPageNumber, getItemsPerpage],
  (products, currentPageNumber, itemsPerPage) => {
    const begin = (currentPageNumber - 1) * itemsPerPage;
    const end = currentPageNumber * itemsPerPage;
    return products.slice(begin, end);
  },
);

export const getNumberOfProducts = createSelector(
  [getAllProducts],
  products => products.size,
);
