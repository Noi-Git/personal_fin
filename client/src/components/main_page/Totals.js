import React, { Component, Fragment } from 'react';
import Display from './Display';
import CardSummary from './CardSummary';
import TotalDisplay from './TotalDisplay';
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
          daily_amount={this.state.total_income - this.state.total_expense}
          display_title="Today's Budget"
        />
        <CardSummary title="Summary">
          <TotalDisplay
            total_amount={this.state.total_income}
            total_type="income"
          />
          <TotalDisplay
            total_amount={this.state.total_expense}
            total_type="expense"
          />
          <TotalDisplay
            total_amount={this.state.total_reserve}
            total_type="reserve_fund"
          />
        </CardSummary>
      </Fragment>
    );
  }
}

export default Totals;
