import {GET_TASKS, MIX_WORDS, SHOW_TASKS, SET_TRANSLATES} from '../actions/types';

const initialState = {
  tasks: [],
  show: true,
  shuffleWords: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SHOW_TASKS:
      return {
        ...state,
        show: !state.show,
      };
    case MIX_WORDS:
      return {
        ...state,
        shuffleWords: action.payload,
      };
    case SET_TRANSLATES:
      return {
        ...state,
        translates: action.payload,
      };
    default:
      return state;
  }
}
