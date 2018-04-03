export default function(state = {}, { type, payload }) {
  switch (type) {
    case 'USER_LOGIN':
      return {
        ...state,
        login: payload
      };
    case 'USER_AUTH':
      return {
        ...state,
        login: payload
      };
    default:
      return state;
  }
}
