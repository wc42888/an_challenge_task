import { createSelector } from 'reselect';

const getAllProducts = state => state.get('products');
const getItemsPerpage = state => state.get('itemsPerPage');

export const getDisplayedProducts = createSelector(
  getAllProducts,
  getItemsPerpage,
  (_, props) => props.pageNumber,
  (products, itemsPerPage, pageNumber) => {
    const begin = (pageNumber - 1) * itemsPerPage;
    const end = pageNumber * itemsPerPage;
    return products.slice(begin, end);
  },
);

export const getNumberOfProducts = createSelector(
  [getAllProducts],
  products => products.size,
);
