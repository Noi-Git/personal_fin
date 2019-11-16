import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Main extends Component {
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

  // componentDidMount() {
  //   Promise.all([fetch('/daily'), fetch('/dailyDetails')])
  //     .then(([resDaily, resDailyDetails]) => {
  //       return Promise.all([resDaily.json(), resDailyDetails.json()]);
  //     })
  //     // fetch('/daily')
  //     //   .then(res => res.json())
  //     .then(results =>
  //       this.setState({ daily: results[0], dailyDetails: results[1] }, () =>
  //         console.log('money sumarry....', results)
  //       )
  //     );
  // }

  render() {
    const totalDaysInMonth = moment().daysInMonth();
    const todayDate = moment().format('D');
    const toTheEndOfTheMonth = totalDaysInMonth - todayDate;

    return (
      <Fragment>
        {this.state.daily.map(dailyData => (
          <div key={dailyData.total}>
            <div className="main__body">
              <div className="budget">
                <p className="budget__amount" key={dailyData.total}>
                  <span className="budget__dollar">$ </span>
                  {(dailyData.total / toTheEndOfTheMonth).toFixed(2)}
                </p>
                <p className="budget__description">Today's Budget</p>
              </div>
            </div>

            <div className="main__balance">
              <p className="main__balance--title">Summary</p>
              <div className="main__balance--total">
                <div>
                  <p className="main__balance--number">
                    <span className="dollar-small" key={dailyData.total}>
                      $
                    </span>
                    {dailyData.total}
                  </p>
                  <p className="main__balance--text">Income</p>
                  <p className="main__balance--add">
                    <img src="img/add-white.svg" alt="" />
                  </p>
                </div>
                <div>
                  <div className="main__balance--number">
                    <span className="dollar-small">$</span> 320.75
                    <p className="main__balance--text">Expense</p>
                  </div>
                  <p className="main__balance--add">
                    <img src="img/add-white.svg" alt="" />
                  </p>
                </div>
                <div>
                  <p className="main__balance--number">
                    <span className="dollar-small">$</span> 1000
                  </p>
                  <p className="main__balance--text">Saving</p>
                  <p className="main__balance--add">
                    <img src="img/add-white.svg" alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div className="main__resources">
              <div className="resource">
                <div className="resource__link resource__link--1">Recipies</div>
                <div className="resource__link resource__link--2">
                  Ingredients
                </div>
                <div className="resource__link resource__link--3">
                  Local Job
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Main;
