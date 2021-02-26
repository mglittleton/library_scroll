import React, { Component } from 'react';
import Slider from 'react-slick';

import Title from './Title';
import Description from './Description';

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
        afterChange: (current) => this.setState({ activeIndex: current }),
      },
      activeIndex: undefined,
      blankBook: {
        description: 'Please wait while loading...',
        title: 'Waiting on titles',
      },
      popPercent: 75,
      picInitSize: 40
    };
  }

  render() {
    const { books } = this.props;
    const { settings, activeIndex, blankBook, popPercent, picInitSize } = this.state;
    const book = activeIndex == undefined ? blankBook : books[activeIndex];
    const descr = book.description;
    const title = book.title;

    return picInitSize ? (
      <div className="slider" style={{ height: '50vh' }}>
        <Title title={title} />
        <Slider {...settings}>
          {books.map((e, i) => {
            let pop = `${picInitSize}%`;
            if (i == activeIndex) {
              pop = `${picInitSize * (1 + popPercent/100)}%`;
            }
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
                  style={{ width: pop }}
                />
              </div>
            );
          })}
        </Slider>
        <Description descr={descr} />
      </div>
    ) : (
      <div>"Please Wait</div>
    )
  }
}
