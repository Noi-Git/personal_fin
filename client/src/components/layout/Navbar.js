import React, { Fragment } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';

const Navbar = props => {
  const dayOfTheWeek = moment().format('dddd');
  const todayFullDate = moment().format('MMMM D, YYYY');

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Fragment>
      <div className="nav">
        <div className="nav__info">
          <Link to="/main_page">
            <i className={props.i_home} aria-hidden="true"></i>
          </Link>
          <Link to="/info">
            <i className={props.i_info} aria-hidden="true"></i>
          </Link>

          {!isAuthenticated && (
            <button
              onClick={() =>
                loginWithRedirect({
                  redirect_uri: 'http://localhost:3000/main_page'
                })
              }
            >
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          )}

          {isAuthenticated && (
            <Link to="/profile">
              <i className={props.i_user} aria-hidden="true"></i>
            </Link>
          )}

          {isAuthenticated && (
            <button onClick={() => logout()}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          )}

          {/* NEW - add a link to the home and profile pages */}
        </div>

        <div className="nav__navbar">
          <p key={dayOfTheWeek}>{dayOfTheWeek}</p>
          <p>{todayFullDate}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
