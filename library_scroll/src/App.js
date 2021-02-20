import React, { Component } from 'react';

import './App.css';
import { FlexRow, FlexColumn } from './Components/customComponents';
import Title from './Components/Title';
import Scroll from './Components/Scroll';
import Description from './Components/Description';

const googleBooksAPI = 'AIzaSyCTE-A9T51L4HTR00zPIyAY5SpvLnN0tOg';

class App extends Component {
  constructor() {
    super();
    this.state = { pics: [] };
  }

  componentDidMount() {
    devBooks.forEach(e => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&key=${googleBooksAPI}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          const pics = result.totalItems ? result.items[0].volumeInfo : false
          const newPics = this.state.pics
          newPics.push(pics)
          this.setState({ pics: newPics });
       });
    })
  }

  render() {
    console.log(this.state.pics);
    return (
      <div className="App">
        <FlexColumn
          justifyAround
          alignCenter
          height="full"
          className="App-header"
        >
          <Title></Title>
          <Scroll pics={this.state.pics}></Scroll>
          <Description></Description>
        </FlexColumn>
      </div>
    );
  }
}

export default App;

const devBooks = [
  9781603090254,
  9781603090476,
  9781891830853,
  9781603090162,
  9781603092654,
  9781603090773,
  9781603093699,
  9781603090261,
  9781603090278,
  9781603094054,
  9781603094429,
  9781603094788,
  9781603092739,
  9781603094320,
];
