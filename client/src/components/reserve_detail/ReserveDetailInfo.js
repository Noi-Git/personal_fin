import React, { Fragment } from 'react';

const IncomeDetailInfo = props => {
  return (
    <Fragment>
      <div className="summary__details">
        <p className="summary__details--name">
          {props.title}
          <span className="go-right">{props.amount}</span>
          <span className="go-right">$</span>
        </p>
      </div>
    </Fragment>
  );
};

export default IncomeDetailInfo;
