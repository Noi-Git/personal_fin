import React, { Component, Fragment } from 'react';
import axios from 'axios';

class IncomeDetailInfo extends Component {
  /* connect to database goes here -- watch lesson 18 */
  state = {
    lists: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('./income');
    console.log(res);
    this.setState({ lists: res.data, loading: false });
  }

  // state = {
  //   lists: []
  // };

  // componentDidMount() {
  //   axios.get('./income').then(res => {
  //     console.log('from income detail info ', res);
  //     this.setState({ lists: res.data });
  //   });
  // .catch(error => {
  //   console.log(error)
  //   this.setState({errorMsg: "Error retreiving data"})
  // })
  // }

  render() {
    // destructure
    const { lists } = this.state;
    return (
      <Fragment>
        <div key="list.id" className="summary__details">
          {lists.map(list => (
            <p key="id" className="summary__details--name">
              {list.i_name}
              <span className="go-right">{list.i_amount}</span>
              <span className="go-right">$</span>
            </p>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default IncomeDetailInfo;
