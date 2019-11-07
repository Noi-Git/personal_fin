import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header__title">Money Pal</h1>
          <h2 className="header__tag-line">
            Manage what you have for the better future
          </h2>

          <div className="login--button">
            <input type="submit" value="Login / Sign up" />
          </div>

          <div className="header__info">More info</div>
          <div className="header__info--icon">
            <FontAwesomeIcon icon={['fas', 'fa-angle-down']} />
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
