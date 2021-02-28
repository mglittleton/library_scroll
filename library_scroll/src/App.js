import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import Scroll from './Components/Scroll';
import { newBookList } from './temp2';
import NavBar from './Components/NavBar';
import SignIn from './Components/User/SignIn';
import Admin from './Components/Admin';
import Register from './Components/User/Register';

const { REACT_APP_GOOGLE_API_KEY, REACT_APP_MODE } = process.env;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], pics: [] };
  }

  componentDidMount() {
    if (REACT_APP_MODE == 'production') {
      devBooks.forEach((e) => {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${e}&key=${REACT_APP_GOOGLE_API_KEY}`
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.totalItems) {
              const books = result.items[0].volumeInfo;
              const newBooks = this.state.books;
              newBooks.push(books);
              this.setState({ books: newBooks });
            }
          });
      });
    } else if (REACT_APP_MODE == 'development') {
      console.log('You are in development mode');
      newBookList.forEach((e) => {
        const book = e;
        const newBooks = this.state.books;
        newBooks.push(book);
        const pics = book.imageLinks;
        const newPics = this.state.pics;
        newPics.push(pics);
        this.setState({
          books: newBooks,
          pics: newPics,
        });
      });
    }
  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={(props) => <Scroll books={books} {...props} />}
        />
        <Route path="/signin/" render={(props) => <SignIn {...props} />} />
        <Route path="/register/" render={(props) => <Register {...props} />} />
        <Route path="/admin/" render={(props) => <Admin {...props} />} />
      </div>
    );
  }
}

export default App;

/*
// NOTE list of books that are hard coded so the site works with no back end. It will be replaced by a database once the second stage is complete.
*/

const devBooks = [
  9781534437333,
  9781627791151,
  9781532118517,
  9780545723336,
  9781338255720,
  9781681199498,
  9780823438686,
  9781368013840,
  9780545946179,
  9781338129304,
  9781368039932,
  9781338157796,
  9781338159318,
];
