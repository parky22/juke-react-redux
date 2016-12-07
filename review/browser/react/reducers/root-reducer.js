import {
  SET_LYRICS
} from '../constants';

const initialState = {
  lyrics: {
    text: null
  }
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_LYRICS:
      newState.lyrics.text = action.text;
      break;

    default:
      return state;

  }

  return newState;

}