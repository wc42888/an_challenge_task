export const SET_CURRENT_PAGE_NUMBER = 'SET_CURRENT_PAGE_NUMBER';

export const setCurrentPageNumber = pageNumber => ({
  type: SET_CURRENT_PAGE_NUMBER,
  payload: {
    pageNumber,
  },
});
