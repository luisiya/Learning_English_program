import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Task } from './Task';
import { Unit } from './Unit';

import { getTasks } from '../actions/getUnits';

export const UnitsList = (props) => {
  const { tasks, getTasks } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const show = useSelector(state => state.list.show);
  return (
    <Fragment>
      {show ? tasks.map(task => (
        <Unit
          key={task.id}
          id={task.id}
          className="units"
          text={task.name}
        />
      )) : <Task />}

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
