import React, { Fragment } from 'react';
import AddReserveButton from '../reserve_detail/AddReserveButton';

const ReserveTotalDisplay = props => {
  return (
    <Fragment>
      <div>
        <p className="main__balance--number">
          <span className="dollar-small">$</span> {props.total_amount}
        </p>
        <p className="main__balance--text">{props.total_type}</p>
        <AddReserveButton />
      </div>
    </Fragment>
  );
};

export default ReserveTotalDisplay;
