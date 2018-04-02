export default function(state = [], { type, payload }) {
  switch (type) {
    case 'GET_BOOKS':
      return { ...state, list: payload };
    default:
      return state;
  }
}
