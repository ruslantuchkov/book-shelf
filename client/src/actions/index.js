import axios from 'axios';

/*============= BOOKS =============*/

export function getBooks(limit = 10, start = 0, order = 'asc', list) {
  const request = axios
    .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return { type: 'GET_BOOKS', payload: request };
}

export function getBookWithReviewer(id) {
  const request = axios.get(`/api/getBook?id=${id}`);

  return dispatch => {
    request.then(({ data: book }) => {
      axios
        .get(`/api/getReviewer?id=${book.ownerId}`)
        .then(({ data: reviewer }) => {
          let response = {
            book,
            reviewer
          };

          dispatch({
            type: 'GET_BOOK_WITH_REVIEWER',
            payload: response
          });
        });
    });
  };
}

export function clearBookWithReviewer() {
  return {
    type: 'CLEAR_BOOK_WITH_REVIEWER',
    payload: {
      book: {},
      reviewer: {}
    }
  };
}

/*============= USER =============*/

export function loginUser({ email, password }) {
  const request = axios
    .post('/api/login', { email, password })
    .then(response => response.data);

  return {
    type: 'USER_LOGIN',
    payload: request
  };
}
