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
      picInitSize: 40,
    };
  }

  render() {
    const { books } = this.props;
    const {
      settings,
      activeIndex,
      blankBook,
      popPercent,
      picInitSize,
    } = this.state;
    const book = activeIndex == undefined ? blankBook : books[activeIndex];
    const descr = book.description;
    const title = book.title;

    return picInitSize ? (
      <div className="slider">
        <Title title={title} />
        <Slider {...settings} style={{ height: '40vh' }}>
          {books.map((e, i) => {
            // this sets the initial width to `picInitSize`
            // then changes it to `popPercent`% bigger if it's the active pic
            let pop = `${picInitSize}%`;
            if (i == activeIndex) {
              pop = `${picInitSize * (1 + popPercent / 100)}%`;
            }

            // protects from empty images that may have made it through to this point
            // and provides it a dummy image
            const ident = e.industryIdentifiers[0].slice(0, 28) + `${i}`;
            if (!e || !e.imageLinks) {
              return (
                <div className="covers">
                  <img
                    key={ident}
                    src="https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                  />
                </div>
              );
            }

            // normal image return
            return (
              <div className="covers">
                <img
                  key={ident}
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
    );
  }
}
