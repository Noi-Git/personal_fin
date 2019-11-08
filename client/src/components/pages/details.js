import React, { Component, Fragment } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: [],
      dailyDetails: []
    };
    this.date = props.totalDaysInMonth;
    this.date = props.toTheEndOfTheMonth;
    this.date = props.todayDate;
  }

  componentDidMount() {
    Promise.all([fetch('/daily'), fetch('/dailyDetails')])
      .then(([resDaily, resDailyDetails]) => {
        return Promise.all([resDaily.json(), resDailyDetails.json()]);
      })
      // fetch('/daily')
      //   .then(res => res.json())
      .then(results =>
        this.setState({ daily: results[0], dailyDetails: results[1] }, () =>
          console.log('money sumarry....', results)
        )
      );
  }

  render() {
    return (
      <Fragment>
        <div className="details__body">
          <div className="input">
            <p className="input__title">Income</p>

            <form action="" className="input__detail">
              <div className="input__detail--name">
                <label>Name of Income</label>
                <input className="input-style" type="text" name="name" />
              </div>

              <div className="input__detail--amount">
                <label>Amount: $</label>
                <input className="input-style" type="text" name="amount" />
              </div>
              <div className="input--button">
                <input type="submit" value="Add" />
              </div>
            </form>
          </div>
        </div>

        <div className="summary">
          <p className="summary__title">Income Summary</p>
          <div className="summary__details">
            <p className="summary__details--name">Work at place 1</p>
            <p className="summary__details--amount">
              <span className="detail__dollar">$ </span>400
            </p>
          </div>
          <div className="summary__details">
            <p className="summary__details--name">Work at place 2</p>
            <p className="summary__details--amount">
              <span className="detail__dollar">$ </span>300.25
            </p>
          </div>

          <div className="summary__details">
            <p className="summary__total">Total</p>
            <p className="summary__total">
              <span className="detail__dollar">$ </span>700.25
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Details;
