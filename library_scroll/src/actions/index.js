import axios from 'axios';
import { newBookList } from '../temp2';

const key = process.env.REACT_APP_GOOGLE_API_KEY;
const mode = process.env.REACT_APP_MODE;
const inDev = mode === 'development';
const inProd = mode === 'production';

export const getBooks = (bookList) => (dispatch) => {
  const newBooks = [];
  if (inProd) {
    bookList.forEach((e) => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${e}&key=${key}`
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.totalItems) {
            const books = result.items[0].volumeInfo;
            newBooks.push(books);
          }
        });
    });
  } else if (inDev) {
    console.log('You are in development mode');
    newBookList.forEach((e) => {
      const book = e;
      newBooks.push(book);
    });
  }
  dispatch({ type: 'GOT_BOOKS', payload: { books: newBooks } });
};

export const changeActive = (index) => (dispatch) => {
  dispatch({ type: 'INDEX_CHANGE', payload: index });
};

export const loggingIn = (user, pass) => (dispatch) => {
  if (user && pass) {
    localStorage.setItem('authToken', user);
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    return { status: true, message: 'Success' };
  } else {
    loggingOut();
    return { status: false, message: 'Username and password are incorrect' };
  }
};

export const loggingOut = () => (dispatch) => {
  localStorage.removeItem('authToken');
  dispatch({ type: 'LOG_OUT' });
};

export const changeAuth = (auth) => (dispatch) => {
  const prevAuth = localStorage.getItem('authToken');

  if (prevAuth && !auth) {
    dispatch({ type: 'AUTH_OK' });
  }
};
