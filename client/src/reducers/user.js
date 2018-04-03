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
    case 'GET_USER_POSTS':
      return {
        ...state,
        userPosts: payload
      };
    default:
      return state;
  }
}
