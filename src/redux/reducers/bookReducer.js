const initialState = {
    books: [],
    filter: '',
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return { ...state, books: [...state.books, action.payload] };
      case 'DELETE_BOOK':
        return { ...state, books: state.books.filter(book => book.id !== action.payload) };
      case 'MARK_AS_READ':
        return {
          ...state,
          books: state.books.map(book =>
            book.id === action.payload ? { ...book, read: true } : book
          ),
        };
      case 'EDIT_BOOK':
        return {
          ...state,
          books: state.books.map(book =>
            book.id === action.payload.id ? { ...book, ...action.payload.data } : book
          ),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  