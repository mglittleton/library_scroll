import { getBooks } from '../actions';

const initialState = {
  books: [],
  isbnNums: [
    9781534437333,
    9781627791151,
    9781532118517,
    9780545723336,
    9781338255720,
    9781681199498,
    9780823438686,
    9781368013840,
    9780545946179,
    9781338129304,
    9781368039932,
    9781338157796,
    9781338159318,
  ],
  sliderSettings: {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    initialSlide: 0,
    cssEase: 'ease-out',
  },
  activeIndex: undefined,
  blankBook: {
    description: 'Please wait while loading...',
    title: 'Waiting on titles',
  },
  popPercent: 75,
  picInitSize: 40,
  user: {
    auth:false,
    name: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_BOOKS':
      return {...state, books: action.payload.books};
    case 'INDEX_CHANGE':
      return {...state, activeIndex: action.payload}
    case 'LOGIN_SUCCESS':
      return {...state, user: {auth: true, name: action.payload}}
    case 'LOG_OUT':
      return {...state, user: {auth: false, name: ''}}
    case "AUTH_OK":
      return {...state, user: {auth: true, name: ''}}
    default:
      return state;
  }
};
