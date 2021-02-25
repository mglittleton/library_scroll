import React, { Component } from 'react';
import Slider from 'react-slick';

import Title from './Title'
import Description from './Description'

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        initialSlide: 0,
        afterChange: current => this.setState({activeIndex: current})
      },
      activeIndex: undefined,
      blankBook: {description: "Please wait while loading...", title: "Waiting on titles"}
    };
  }

  render() {
    const {books} = this.props
    const {settings, activeIndex, blankBook} = this.state
    const book = activeIndex == undefined ? blankBook: books[activeIndex]
    const descr = book.description
    const title = book.title

    return (
      <div className="slider" style={{ height: '50vh' }}>
        <Title title={title} />
        <Slider {...settings}>
          {books.map((e, i) => {
            if (!e || !e.imageLinks) {
              return (
                <div className="covers">
                  <img
                    key={e.industryIdentifiers[0].identifier}
                    src="https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                  />
                </div>
              );
            }
            return (
              <div className="covers">
                <img
                  key={e.industryIdentifiers[0].identifier}
                  src={e.imageLinks.thumbnail + '&zoom=1'}
                />
              </div>
            );
          })}
        </Slider>
        <Description descr={descr}/>
      </div>
    );
  }
}
