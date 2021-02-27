import { SUCCESS } from '../actions';

const initialState = {
  temp: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS: // or whatever from actions location
      return state; // some object representing the new state, such as {...state, loading: false, error: action.error}
    default:
      return state;
  }
};
