import React, { Fragment } from 'react';

const Resources = props => {
  return (
    <Fragment>
      <div className="main__resources">
        <div className="resource">
          <div className="resource__link resource__link--1">
            {props.recipies_title}
          </div>
          <div className="resource__link resource__link--2">
            {props.ingredients_title}
          </div>
          <div className="resource__link resource__link--3">
            {props.job_title}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;
