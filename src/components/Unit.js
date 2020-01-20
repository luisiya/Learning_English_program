import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import { showUnits } from '../actions/showUnits';

const useStyles = makeStyles(() => ({
  taskBtn: {
    width: '26%',
    margin: '0 auto',
    color: '#009688',
    '@media (max-width:479px)': {
      width: '40%',
      textAlign: 'left',
    },
  },
}));

export const Unit = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.list.tasks);

  const startLearning = (e) => {
    const userChoice = e.currentTarget.title;

    Object.keys(tasks)
      .forEach((key) => {
        const choosenObj = tasks[key].tasks;

        if (tasks[key].name === userChoice) {
          dispatch({ type: 'MIX_WORDS', payload: Object.keys(choosenObj).sort(() => 0.5 - Math.random()) });
          dispatch({ type: 'SET_TRANSLATES', payload: choosenObj });
          dispatch(showUnits());
        }
      });
  };

  const { text } = props;
  return (

    <Button
      title={text}
      className={classes.taskBtn}
      fullWidth
      onClick={startLearning}
    >
      {text}
    </Button>

  );
};

Button.propTypes = {
  text: PropTypes.string,
};
export default Unit;
