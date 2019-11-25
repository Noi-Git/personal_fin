import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Info from './components/Info';
import Totals from './components/main_page/Totals';
import IncomeDetailMain from './components/income_detail/IncomeDetailMain';
import ExpenseDetailMain from './components/expense_detail/ExpenseDetailMain';
import ReserveDetailMain from './components/reserve_detail/ReserveDetailMain';

import { useAuth0 } from './react-auth0-spa';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
// import ExternalApi from './views/ExternalApi';

import Component1 from './functional/component1';
import Container1 from './containers/Container1';

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
          i_home="fa fa-home"
          i_info="fa fa-info"
          i_user="fa fa-user"
          i_signin="fa fa-sign-in"
          i_signout="fa fa-sign-out"
        />

        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/info" component={Info} />
          <PrivateRoute exact path="/main_page" component={Totals} />
          <PrivateRoute
            exact
            path="/income_detail"
            component={IncomeDetailMain}
          />
          <PrivateRoute
            exact
            path="/expense_detail"
            component={ExpenseDetailMain}
          />
          <PrivateRoute
            exact
            path="/reserve_detail"
            component={ReserveDetailMain}
          />
          {/* <Route path="/" component={NotFound} /> */}
          {/*<PrivateRoute path="/external-api" component={ExternalApi} />*/}
        </Switch>
        <Component1 name="Noi" />
        <Container1 />
      </Fragment>
    </Router>
  );
};

export default App;
