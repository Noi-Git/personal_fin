import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Navbar extends Component {
  static defaultProps = {
    i_home: 'fa fa-home',
    i_info: 'fa fa-info',
    i_signout: 'fa fa-sign-out'
  };

  render() {
    const dayOfTheWeek = moment().format('dddd');
    const todayFullDate = moment().format('MMMM D, YYYY');

    return (
      <Fragment>
        <div className="nav">
          <div className="nav__info">
            <i className={this.props.i_home} aria-hidden="true"></i>
            <i className={this.props.i_info} aria-hidden="true"></i>
            <i className={this.props.i_signout} aria-hidden="true"></i>
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

export default Navbar;
