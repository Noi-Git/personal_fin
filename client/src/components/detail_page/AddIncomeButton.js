import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AddIncomeButton = props => {
  return (
    <Fragment>
      <p className="main__balance--add">
        <Link to="/detail_page">
          <i
            className="fa fa-plus-square icon_summary"
            aria-hidden="true"
            style={{ color: '#ff5722', padding: '0px 15px' }}
          ></i>
        </Link>
      </p>
    </Fragment>
  );
};

export default AddIncomeButton;
