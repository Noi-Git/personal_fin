import React, { Component, Fragment } from 'react';
import Display from './Display';
import CardSummary from './CardSummary';
import TotalDisplay from './TotalDisplay';

class Totals extends Component {
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
