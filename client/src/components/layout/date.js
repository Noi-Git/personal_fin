import React, { Component } from 'react';
import moment from 'moment';

class Date extends Component {
  constructor(props) {
    super(props);
    this.date = props.totalDaysInMonth;
    this.date = props.toTheEnd;
    this.date = props.number;
  }

  render() {
    const totalDaysInMonth = moment().daysInMonth();
    const number = moment().format('D');
    const toTheEnd = totalDaysInMonth - number;

    return (
      <div>
        <ul>
          <li>This month has {totalDaysInMonth} days</li>
          <li>Today date {number} </li>
          <li>Total day left in this month {toTheEnd} days</li>
        </ul>
      </div>
    );
  }
}

export default Date;
