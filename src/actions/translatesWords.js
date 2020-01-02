import { SET_TRANSLATES } from './types';

export const translatesWords = () => async (dispatch) => {
  dispatch({
    type: SET_TRANSLATES,
  });
};

export default translatesWords;
