import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/login">Login</Link>
          </div>
          <div className="login--button">
            <Link to="/register">Register</Link>
          </div>

          <div className="header__info">More info</div>
          <div className="header__info--icon">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
