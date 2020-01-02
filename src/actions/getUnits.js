import axios from 'axios';
import { GET_TASKS } from './types';

export const getTasks = () => async (dispatch) => {
  const res = await axios.get('https://my-json-server.typicode.com/luisiya/data_english/db');
  dispatch({
    type: GET_TASKS,
    payload: res.data.actions,
  });
};
