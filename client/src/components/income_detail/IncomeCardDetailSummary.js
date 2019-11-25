import React, { Fragment } from 'react';

const IncomeCardDetailSummary = props => {
  return (
    <Fragment>
      <div className="summary">
        <p className="summary--title">{props.title}</p>
        <div className="summary__details">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default IncomeCardDetailSummary;
