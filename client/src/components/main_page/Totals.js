import React, { Component, Fragment } from 'react';
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
        <CardSummary>
          <TotalDisplay total_amount="650" total_type="income" />
          <TotalDisplay total_amount="450" total_type="expense" />
          <TotalDisplay total_amount="120" total_type="reserve_fund" />
        </CardSummary>
      </Fragment>
    );
  }
}

export default Totals;
