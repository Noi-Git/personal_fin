import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Main extends Component {
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
    // Promise.all([fetch('/daily'), fetch('/daily_details')]).then([
    //   user_id,
    //   type,
    //   name,
    //   amount,
    //   total
    // ]);
    fetch('/daily')
      .then(res => res.json())
      .then(data =>
        this.setState({ data }, () => console.log('money sumarry....', data))
      );
  }

  render() {
    const totalDaysInMonth = moment().daysInMonth();
    const todayDate = moment().format('D');
    const toTheEndOfTheMonth = totalDaysInMonth - todayDate;

    const dayOfTheWeek = moment().format('dddd');
    const todayFullDate = moment().format('MMMM, D YYYY');

    return (
      <Fragment>
        {this.state.data.map(dailyData => (
          <div>
            <div className="main__body">
              <div className="nav">
                <div className="nav__info">
                  <p>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </p>
                  <p>
                    <i className="fa fa-info" aria-hidden="true"></i>
                  </p>
                  <p>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </p>
                </div>
                <div className="nav__navbar">
                  <p>{dayOfTheWeek}</p>
                  <p>{todayFullDate}</p>
                </div>
              </div>
              <div className="budget">
                <p className="budget__amount">
                  <span class="budget__dollar">$ </span>
                  {(dailyData.amount / toTheEndOfTheMonth).toFixed(2)}
                </p>
                <p className="budget__description">Today's Budget</p>
              </div>
            </div>

            <div class="main__balance">
              <p class="main__balance--title">Summary</p>
              <div class="main__balance--total">
                <div>
                  <p class="main__balance--number">
                    <span class="dollar-small">$</span> 650
                  </p>
                  <p class="main__balance--text">Income</p>
                  <p class="main__balance--add">
                    <img src="img/add-white.svg" alt="" />
                  </p>
                </div>
                <div>
                  <p class="main__balance--number">
                    <span class="dollar-small">$</span> 320.75
                    <p class="main__balance--text">Expense</p>
                  </p>
                  <p class="main__balance--add">
                    <img src="img/add-white.svg" alt="" />
                  </p>
                </div>
                <div>
                  <p class="main__balance--number">
                    <span class="dollar-small">$</span> 1000
                  </p>
                  <p class="main__balance--text">Saving</p>
                  <p class="main__balance--add">
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
