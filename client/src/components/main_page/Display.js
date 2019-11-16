import React, { Component, Fragment } from 'react';

export class Display extends Component {
  render() {
    return (
      <Fragment>
        <div class="main__body">
          <div class="budget">
            <p class="budget__amount">
              <span class="budget__dollar">$ </span>20
            </p>
            <p class="budget__description">Today's Budget</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Display;
