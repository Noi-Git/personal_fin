import React, { Component, Fragment } from 'react';
import Display from './Display';
import CardSummary from './CardSummary';
// import TotalDisplay from './TotalDisplay';
import ExpenseTotalDisplay from './ExpenseTotalDisplay';
import IncomeTotalDisplay from './IncomeTotalDisplay';
import ReserveTotalDisplay from './ReserveTotalDisplay';
import Resources from './Resources';
import axios from 'axios';
import { Auth0Context } from '../../react-auth0-spa';

class Totals extends Component {
  /*state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get('http://localhost:5000/total');

    this.setState({ users: res.data, loading: false});

  }*/

  static contextType = Auth0Context;

  constructor() {
    super();
    this.state = {
      loading: false
      // user_id: 7,
      // total_income: 1520.25,
      // total_expense: 888.75,
      // total_reserve: 380.25
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const userFromAuth0 = this.context.user;

    const res = await axios({
      url: 'https://my-money-pal.herokuapp.com/user',
      method: 'POST',
      data: {
        username: userFromAuth0.name,
        email: userFromAuth0.email,
        sub: userFromAuth0.sub
      }
    });
    console.log(res.data);
    const userFromBackend = res.data.user;
    let budgetFromBackend = res.data.budget;
    console.log('userFromBackend', userFromBackend);
    console.log('budgetFromBackend:', budgetFromBackend);

    if (!budgetFromBackend) {
      budgetFromBackend.total_income = 0;
      budgetFromBackend.total_expense = 0;
      budgetFromBackend.total_reserve = 0;
    }

    this.setState({
      loading: false,
      user_id: userFromBackend.id,
      total_income: budgetFromBackend.total_income,
      total_expense: budgetFromBackend.total_expense,
      total_reserve: budgetFromBackend.total_reserve
    });
  }

  render() {
    return (
      <Fragment>
        <Display
          daily_amount={
            this.state.total_income -
            this.state.total_expense -
            this.state.total_reserve
          }
          display_title="Today's Budget"
        />
        <CardSummary title="Summary">
          <IncomeTotalDisplay
            total_amount={this.state.total_income}
            total_type="Monthly Income"
          />
          <ExpenseTotalDisplay
            total_amount={this.state.total_expense}
            total_type="Monthly Expense"
            link_to="expense_detail"
          />
          <ReserveTotalDisplay
            total_amount={this.state.total_reserve}
            total_type="Reserve_fund"
            link_to="reserve_detail"
          />
        </CardSummary>
        <Resources
          recipies_title="Recipes"
          ingredients_title="Ingredients"
          job_title="Local Job"
        />
      </Fragment>
    );
  }
}

export default Totals;
