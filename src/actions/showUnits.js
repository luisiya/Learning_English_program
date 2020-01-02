import { SHOW_TASKS } from './types';

export const showUnits = () => async (dispatch) => {
  dispatch({
    type: SHOW_TASKS,
  });
};

export default showUnits;
