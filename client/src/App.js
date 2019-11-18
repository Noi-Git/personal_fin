import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Info from './components/layout/Info';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Totals from './components/main_page/Totals';
import DetailMain from './components/detail_page/DetailMain';

import { useAuth0 } from './react-auth0-spa';
import Profile from './components/Profile';

import './App.css';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Fragment>
        <Navbar
        // i_home="fa fa-home"
        // i_info="fa fa-info"
        // i_signout="fa fa-sign-in"
        />

        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>

        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/info" component={Info} />

        <Route exact path="/main_page" component={Totals} />
        <Route exact path="/detail_page" component={DetailMain} />
      </Fragment>
    </Router>
  );
};

export default App;
