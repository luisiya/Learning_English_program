import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tasks from './UnitsList';

const useStyles = makeStyles(theme => ({
  startBtn: {
    width: '100px',
    height: '40px',
  },
}));

export const UnitsWrapper = () => {
  const classes = useStyles();
  const [isShow, setShow] = useState(false);
  const show = () => {
    setShow(true);
  };
  return (
    <Fragment>
      {!isShow ? <Button className={classes.startBtn} variant="contained" color="secondary" onClick={show}>START</Button> : ''}
      {isShow ? <Tasks /> : ''}
    </Fragment>
  );
};


export default UnitsWrapper;
