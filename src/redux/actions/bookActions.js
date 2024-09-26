export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const deleteBook = (id) => ({
    type: 'DELETE_BOOK',
    payload: id,
  });
  
  export const markAsRead = (id) => ({
    type: 'MARK_AS_READ',
    payload: id,
  });
  
  export const editBook = (id, data) => ({
    type: 'EDIT_BOOK',
    payload: { id, data },
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  