import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TotalDisplay = props => {
  return (
    <Fragment>
      <div>
        <p className="main__balance--number">
          <span className="dollar-small">$</span> {props.total_amount}
        </p>
        <p className="main__balance--text">{props.total_type}</p>
        <p className="main__balance--add">
          <Link to="/detail_page">
            <i
              className="fa fa-plus-square icon_summary"
              aria-hidden="true"
              style={{ color: '#ff5722', padding: '0px 15px' }}
            ></i>
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default TotalDisplay;
