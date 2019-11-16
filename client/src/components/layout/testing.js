import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
    this.date = props.totalDaysInMonth;
    this.date = props.toTheEndOfTheMonth;
    this.date = props.todayDate;
  }

  componentDidMount() {
    fetch('/total')
      .then(res => res.json())
      .then(datas =>
        this.setState({ datas }, () =>
          console.log('total money details....', datas)
        )
      );
  }

  render() {
    const totalDaysInMonth = moment().daysInMonth();
    const todayDate = moment().format('D');
    const toTheEndOfTheMonth = totalDaysInMonth - todayDate;

    return (
      <Fragment>
        <h2>Landing</h2>

        <ul>
          {this.state.datas.map(
            data => 
              <li key={data.user_id}>Total income: {data.total_income} </li>
              <li key={data.id1}>Total income: {data.total_expense}</li>
            
            // <li key={data.id}>Total income: {data.total_reserve}</li>

            //   <li>Amount: ${data.income}</li>
            //   <li>
            //   Daily amount: $
            //   {(data.amount / toTheEndOfTheMonth).toFixed(2)}
            //   </li>
            //   <li>Type: {data.type}</li>

            // <li>============================</li>
            // <li>This month has {totalDaysInMonth} days</li>
            // <li>Today date {todayDate} </li>
            // <li>Total day left in this month {toTheEndOfTheMonth} days</li>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Testing;
