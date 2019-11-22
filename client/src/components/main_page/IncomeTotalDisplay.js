import React, { Fragment } from 'react';
import AddIncomeButton from '../detail_page/AddIncomeButton';

const IncomeTotalDisplay = props => {
  return (
    <Fragment>
      <div>
        <p className="main__balance--number">
          <span className="dollar-small">$</span> {props.total_amount}
        </p>
        <p className="main__balance--text">{props.total_type}</p>
        <AddIncomeButton />
      </div>
    </Fragment>
  );
};

export default IncomeTotalDisplay;
