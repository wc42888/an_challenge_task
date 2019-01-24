export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';

export const setItemsPerPage = itemsPerPage => ({
  type: SET_ITEMS_PER_PAGE,
  payload: {
    itemsPerPage,
  },
});
