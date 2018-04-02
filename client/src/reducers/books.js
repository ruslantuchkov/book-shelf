export default function(state = [], { type, payload }) {
  switch (type) {
    case 'GET_BOOKS':
      return { ...state, list: payload };
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
    default:
      return state;
  }
}
