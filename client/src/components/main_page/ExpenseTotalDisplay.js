import React, { Fragment } from 'react';
import AddExpenseButton from '../expense_detail/AddExpenseButton';

const ExpenseTotalDisplay = props => {
  return (
    <Fragment>
      <div>
        <p className="main__balance--number">
          <span className="dollar-small">$</span> {props.total_amount}
        </p>
        <p className="main__balance--text">{props.total_type}</p>
        <AddExpenseButton />
      </div>
    </Fragment>
  );
};

export default ExpenseTotalDisplay;
