import React, { Component } from 'react';

import './App.css';
import { FlexRow, FlexColumn } from './Components/customComponents';
import Title from './Components/Title';
import Scroll from './Components/Scroll';
import Description from './Components/Description';

class App extends Component {
  constructor() {
    super();
    this.state = { pics: [] };
  }

  componentDidMount() {
    fetch('https://openlibrary.org/works/OL45883W.json')
      .then((res) => res.json())
      .then((result) => {
        const pics = result.covers.filter(e => {
          return e > 0
        })
        this.setState({ pics: pics });
      });
  }

  render() {
    console.log(this.state.pics)
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
