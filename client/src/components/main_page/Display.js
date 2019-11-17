import React, { Fragment } from 'react';
import moment from 'moment';

const Display = props => {
  const totalDaysInMonth = moment().daysInMonth();
  const todayDate = moment().format('D');
  const toTheEndOfTheMonth = totalDaysInMonth - todayDate;

  return (
    <Fragment>
      <div className="main__body">
        <div className="budget">
          <p className="budget__amount">
            <span className="budget__dollar">$ </span>
            {(props.daily_amount / toTheEndOfTheMonth).toFixed(2)}
          </p>
          <p className="budget__description">{props.display_title}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Display;
