import React from 'react';

const CardSummary = props => {
  // console.log(props.children);
  return (
    <div className="main__balance">
      <div className="main__balance--title">{props.title.toUpperCase()}</div>
      <div className="main__balance--total">{props.children}</div>
    </div>
  );
};

export default CardSummary;
