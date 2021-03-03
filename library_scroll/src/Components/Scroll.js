import React, {useEffect} from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import Title from './Title';
import Description from './Description';
import { changeActive } from '../actions';

const Scroll = (props) => {
  useEffect(() => {
    changeActive(0)
    settings.autoplaySpeed = 10000
  }, [])

  const {
    settings,
    books,
    activeIndex,
    blankBook,
    picInitSize,
    landing,
    landPage,
    changeActive,
  } = props;
  const book = activeIndex == undefined ? blankBook : books[activeIndex];
  const { description, title } = landPage ? landing : book;
  const popPercent = landPage ? 0 : props.popPercent
  if (landPage) {
    settings.autoplaySpeed = landing.autoSpeed
  } else {
    settings.autoplaySpeed = 10000
  }

  return picInitSize ? (
    <div className="slider">
      <Title title={title} />
      <Slider
        {...settings}
        beforeChange={(oldInd, newInd) => {
          changeActive(newInd);
        }}
        style={{ height: '40vh' }}
      >
        {books.map((e, i) => {
          // this sets the initial width to `picInitSize` then changes it to `popPercent`% bigger if it's the active pic
          let pop = `${picInitSize}%`;
          if (i == activeIndex) {
            pop = `${picInitSize * (1 + popPercent / 100)}%`;
          }

          // protects from empty images that may have made it through to this point and provides it a dummy image
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
      <Description descr={description} />
    </div>
  ) : (
    <div>"Please Wait</div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    blankBook: state.blankBook,
    settings: state.sliderSettings,
    activeIndex: state.activeIndex,
    popPercent: state.popPercent,
    picInitSize: state.picInitSize,
    landing: state.landing
  };
};

const connector = connect(mapStateToProps, { changeActive });

export default connector(Scroll);
