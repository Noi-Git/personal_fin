import React, { Component, Fragment } from 'react';
import axios from 'axios';

class IncomeDetailInfo extends Component {
  state = {
    lists: []
  };

  componentDidMount() {
    axios.get('./reserve').then(res => {
      console.log('from reserve fund detail info ', res);
      this.setState({ lists: res.data });
    });
  }

  render() {
    const { lists } = this.state;

    return (
      <Fragment>
        <div key="list.id" className="summary__details">
          {lists.map(list => (
            <p className="summary__details--name">
              {list.r_name}
              <span className="go-right">{list.r_amount}</span>
              <span className="go-right">$</span>
            </p>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default IncomeDetailInfo;
