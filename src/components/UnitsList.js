import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Task } from './Task';
import { Unit } from './Unit';

import { getTasks } from '../actions/getUnits';

const useStyles = makeStyles(() => ({
  taskBtnBlock: {
    width: '80%',
    margin: '0 auto',
  },
}));

export const UnitsList = (props) => {
  const { tasks, getTasks } = props;
  const classes = useStyles();

  useEffect(() => {
    getTasks();
  }, []);

  const show = useSelector(state => state.list.show);
  return (
    <Fragment>
      <div className={classes.taskBtnBlock}>
        {show ? tasks.map(task => (
          <Unit
            key={task.id}
            id={task.id}
            className="units"
            text={task.name}
          />
        )) : <Task />}
      </div>
    </Fragment>
  );
};

UnitsList.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.list.tasks,
});

export default connect(mapStateToProps, { getTasks })(UnitsList);
