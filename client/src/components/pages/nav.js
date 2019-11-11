import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Nav extends Component {
  render() {
    const dayOfTheWeek = moment().format('dddd');
    const todayFullDate = moment().format('MMMM D, YYYY');

    return (
      <Fragment>
        <div className="nav">
          <div className="nav__info">
            <p>
              <i className="fa fa-home" aria-hidden="true"></i>
            </p>
            <p>
              <i className="fa fa-info" aria-hidden="true"></i>
            </p>
            <p>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </p>
          </div>
          <div className="nav__navbar">
            <p key={dayOfTheWeek}>{dayOfTheWeek}</p>
            <p>{todayFullDate}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;
