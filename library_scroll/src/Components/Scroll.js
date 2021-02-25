import { FlexRow } from './customComponents';
import Slider from 'react-slick';

function Scroll(props) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className='slider' style={{ height: '50%' }}>
      <Slider {...settings}>

        {props.books.map((e, i) => {
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
    </div>
  );
}

export default Scroll;
