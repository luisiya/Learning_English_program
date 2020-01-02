import { MIX_WORDS } from './types';

export const shuffleWords = () => async (dispatch) => {
  dispatch({
    type: MIX_WORDS,
  });
};

export default shuffleWords;
