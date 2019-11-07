import React, { Component } from 'react';
import './landing.css';
import moment from 'moment';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.date = props.totalDaysInMonth;
    this.date = props.toTheEndOfTheMonth;
    this.date = props.todayDate;
  }

  componentDidMount() {
    fetch('/daily')
      .then(res => res.json())
      .then(data =>
        this.setState({ data }, () => console.log('money detail....', data))
      );
  }

  render() {
    const totalDaysInMonth = moment().daysInMonth();
    const todayDate = moment().format('D');
    const toTheEndOfTheMonth = totalDaysInMonth - todayDate;

    return (
      <div>
        <h2>Landing</h2>
        <div>
          {this.state.data.map(dailyData => (
            <ul key={dailyData.id}>
              <li>Name: {dailyData.user_id}</li>
              <li>Income from: {dailyData.name}</li>
              <li>Total income: {dailyData.total}</li>
              <li>Amount: ${dailyData.amount}</li>
              <li>
                Daily amount: $
                {(dailyData.amount / toTheEndOfTheMonth).toFixed(2)}
              </li>
              <li>Type: {dailyData.type}</li>
              <li>============================</li>
              <li>This month has {totalDaysInMonth} days</li>
              <li>Today date {todayDate} </li>
              <li>Total day left in this month {toTheEndOfTheMonth} days</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
