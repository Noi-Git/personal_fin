import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('/daily')
      .then(res => res.json())
      .then(data =>
        this.setState({ data }, () => console.log('money detail....', data))
      );
  }

  render() {
    return (
      <div>
        <h2>Landing</h2>
        <div>
          {this.state.data.map(dailyData => (
            <ul key={dailyData.id}>
              <li>Name: {dailyData.name}</li>
              <li>Amount: {dailyData.amount}</li>
              <li>Duration: {dailyData.totaldays} days</li>
              <li>Summerry/day: ${dailyData.perday}</li>
              <li>Type: {dailyData.type}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
