import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ExpenseDetailInfo extends Component {
  state = {
    lists: []
  };

  componentDidMount() {
    axios.get('./expense').then(res => {
      console.log('from expense detail info ', res);
      this.setState({ lists: res.data });
    });
  }

  render() {
    // destructure
    const { lists } = this.state;

    return (
      <Fragment>
        <div key="list.id" className="summary__details">
          {lists.map(list => (
            <p className="summary__details--name">
              {list.e_name}
              <span className="go-right">{list.e_amount}</span>
              <span className="go-right">$</span>
            </p>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ExpenseDetailInfo;
