import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './App.css';
import Scroll from './Components/Scroll';
import { bookList } from './temp';

const  { REACT_APP_GOOGLE_API_KEY } = process.env

class App extends Component {
  constructor() {
    super();
    this.state = { books: [], pics: [] };
  }

  componentDidMount() {
    devBooks.forEach(e => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e}&key=${REACT_APP_GOOGLE_API_KEY}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.totalItems) {
            const books = result.totalItems ? result.items[0].volumeInfo : false
            const newBooks = this.state.books
            newBooks.push(books)
            this.setState({ books: newBooks });
          }
       });
    })
    // TODO make this switch automatically if in dev
    // NOTE this is a temp solution during development to ease the API usage
    // bookList.forEach((e) => {
    //   const book = e.items[0].volumeInfo;
    //   const newBooks = this.state.books;
    //   newBooks.push(book);
    //   const pics = book.imageLinks;
    //   const newPics = this.state.pics;
    //   newPics.push(pics);
    //   this.setState({
    //     books: newBooks,
    //     pics: newPics,
    //   });
    // });
  }

  render() {
    const {books} = this.state
    console.log(books)
    return (
      <div className="App">
        <Scroll books={books}/>
      </div>
    );
  }
}

export default App;

// TODO need to find an easy way to access the list of ISBN numbers
const devBooks = [
  9781368024662,
  9781524738112,
  9781328781505,
  9780448478395,
  9780399257308,
  9781609809072,
  9781324003601,
  9781250295767,
  9781250295811,
  9781250295804,
  9781250295774,
  9781543554427,
  9781338259148,
  9781627795548,
  9780316464475,
  9781328460837,
  9780316515467,
  9781328884206,
  9781682630761,
  9781452169989,
  9781484709146,
  9781481460033
]

