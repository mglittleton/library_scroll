import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import { FlexRow, FlexColumn } from './Components/customComponents';
import Title from './Components/Title';
import Scroll from './Components/Scroll';
import Description from './Components/Description';
import { bookList } from './temp';

const googleBooksAPI = 'AIzaSyCTE-A9T51L4HTR00zPIyAY5SpvLnN0tOg';

class App extends Component {
  constructor() {
    super();
    this.state = { books: [], pics: [] };
  }

  componentDidMount() {
    // devBooks.forEach(e => {
    //   fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e}&key=${googleBooksAPI}`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log(result)
    //       if (result.totalItems) {
    //         const books = result.totalItems ? result.items[0].volumeInfo : false
    //         const newBooks = this.state.books
    //         newBooks.push(books)
    //         this.setState({ books: newBooks });
    //       }
    //    });
    // })
    bookList.forEach((e) => {
      const book = e.items[0].volumeInfo;
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

  render() {
    const {books} = this.state
    return (
      <div className="App">
        {/* <Title></Title> */}
        <Scroll books={books}/>
        {/* <Description books={this.state.books}></Description> */}
      </div>
    );
  }
}

export default App;

// TODO need to find an easy way to access the list of ISBN numbers
const devBooks = [
  9781534437333,
  1596431687,
  9781627791151,
  62885502,
  62872044,
  1984848593,
  9781603090476,
  9781891830853,
  9781603090773,
  9781603093699,
];

