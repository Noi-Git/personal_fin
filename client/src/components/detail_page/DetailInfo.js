import React, { Fragment } from 'react';

const DetailInfo = () => {
  return (
    <Fragment>
      <div className="summary__details">
        <p className="summary__details--name">Work at place 1</p>
        <p className="summary__details--amount">
          <span className="detail__dollar">$ </span>400
        </p>
      </div>
    </Fragment>
  );
};

export default DetailInfo;
