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
    this.date = props.toTheEnd;
    this.date = props.number;
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
    const number = moment().format('D');
    const toTheEnd = totalDaysInMonth - number;

    return (
      <div>
        <h2>Landing</h2>
        <div>
          {this.state.data.map(dailyData => (
            <ul key={dailyData.id}>
              <li>Name: {dailyData.user_id}</li>
              <li>Income from: {dailyData.name}</li>
              <li>Amount: {dailyData.amount}</li>
              <li>Daily amount: ${dailyData.amount / toTheEnd}</li>
              <li>Type: {dailyData.type}</li>
              <li>============================</li>
              <li>This month has {totalDaysInMonth} days</li>
              <li>Today date {number} </li>
              <li>Total day left in this month {toTheEnd} days</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
