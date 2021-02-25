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
        speed: 5000,
        autoplay: true,
        afterChange: current => this.setState({activeIndex: current})
      },
      activeIndex: undefined
    };
  }

  render() {
    const {books} = this.props
    const {settings, activeIndex} = this.state
    const book = activeIndex == undefined ? {description: "Please wait while loading...", title: "Waiting on titles"}: books[activeIndex]
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
                    key={i}
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
