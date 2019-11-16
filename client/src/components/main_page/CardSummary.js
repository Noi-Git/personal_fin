import React from 'react';
import TotalDisplay from './TotalDisplay';

const CardSummary = props => {
  console.log(props.children);
  return (
    <div className="main__balance">
      <div className="main__balance--title">Summary</div>
      <div className="main__balance--total">{props.children}</div>
    </div>
  );
};

export default CardSummary;
