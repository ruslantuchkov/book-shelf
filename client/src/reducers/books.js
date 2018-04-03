export default function(state = {}, { type, payload }) {
  switch (type) {
    case 'GET_BOOKS':
      return { ...state, list: payload };
    case 'GET_BOOK':
      return { ...state, book: payload };
    case 'GET_BOOK_WITH_REVIEWER':
      return {
        ...state,
        book: payload.book,
        reviewer: payload.reviewer
      };
    case 'CLEAR_BOOK_WITH_REVIEWER':
      return {
        ...state,
        book: payload.book,
        reviewer: payload.reviewer
      };
    case 'ADD_BOOK':
      return {
        ...state,
        newBook: payload
      };
    case 'CLEAR_NEW_BOOK':
      return {
        ...state,
        newBook: payload
      };
    case 'UPDATE_BOOK':
      return {
        ...state,
        updateBook: payload.success,
        book: payload.doc
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        bookDeleted: payload.success
      };
    case 'CLEAR_BOOK':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
