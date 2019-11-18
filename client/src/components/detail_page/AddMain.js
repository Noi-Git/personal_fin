import React, { Component, Fragment } from 'react';
import AddForm from './AddForm';

class AddMain extends Component {
  /* connect to database goes here -- watch lesson 18 */
  /*state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get('http://localhost:5000/total');

    this.setState({ users: res.data, loading: false});

  }*/

  searchIncome = text => {
    console.log(text);
    /* move query to here when doing the search */
  };

  render() {
    return (
      <Fragment>
        <AddForm searchIncome={this.searchIncome} />
      </Fragment>
    );
  }
}

export default AddMain;
