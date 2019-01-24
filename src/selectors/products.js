import { createSelector } from 'reselect';

const getAllProducts = state => state.get('products');
const getCurrentPageNumber = state => state.get('currentPageNumber');
const getItemsPerpage = state => state.get('itemsPerPage');

const getDisplayedProducts = createSelector(
  [getAllProducts, getCurrentPageNumber, getItemsPerpage],
  (products, currentPageNumber, itemsPerPage) => {
    const begin = (currentPageNumber - 1) * itemsPerPage;
    const end = currentPageNumber * itemsPerPage - 1;
    return products.slice(begin, end);
  },
);

export default getDisplayedProducts;
