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
