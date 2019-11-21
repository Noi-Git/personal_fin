import React, { Component, Fragment } from 'react';
import Display from './Display';
import CardSummary from './CardSummary';
import TotalDisplay from './TotalDisplay';
import Resources from './Resources';
// import axios from 'axios';

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

  constructor() {
    super();
    this.state = {
      user_id: 7,
      total_income: 1520.25,
      total_expense: 888.75,
      total_reserve: 380.25
    };
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
          <TotalDisplay
            total_amount={this.state.total_income}
            total_type="Income"
          />
          <TotalDisplay
            total_amount={this.state.total_expense}
            total_type="Expense"
          />
          <TotalDisplay
            total_amount={this.state.total_reserve}
            total_type="Reserve_fund"
          />
        </CardSummary>
        <Resources
          recipies_title="Recipies"
          ingredients_title="Ingredients"
          job_title="Local Job"
        />
      </Fragment>
    );
  }
}

export default Totals;
