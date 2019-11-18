import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  static defaultProps = {
    i_home: 'fa fa-home',
    i_info: 'fa fa-info',
    i_signin: 'fa fa-sign-in'
  };

  render() {
    const dayOfTheWeek = moment().format('dddd');
    const todayFullDate = moment().format('MMMM D, YYYY');

    return (
      <Fragment>
        <div className="nav">
          <div className="nav__info">
            <Link to="/">
              <i className={this.props.i_home} aria-hidden="true"></i>
            </Link>
            <Link to="/info">
              <i className={this.props.i_info} aria-hidden="true"></i>
            </Link>
            <Link to="/login">
              <i className={this.props.i_signin} aria-hidden="true"></i>
            </Link>
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
