import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <div className="header">
        <h1 className="header__title">Money Pal</h1>
        <h2 className="header__tag-line">
          Manage what you have for the better future
        </h2>

        {!isAuthenticated && (
          <button
            className="login--button"
            onClick={() =>
              loginWithRedirect({
                redirect_uri: 'http://localhost:3000/main_page'
              })
            }
          >
            Login / Register
          </button>
        )}

        <div className="header__info">More info</div>
        <div className="header__info--icon">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
