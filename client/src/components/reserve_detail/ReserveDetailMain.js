import React, { Component, Fragment } from 'react';
import AddForm from './ReserveAddForm';
import ReserveCardDetailSummary from './ReserveCardDetailSummary';
import ReserveDetailInfo from './ReserveDetailInfo';

class IncomeDetailMain extends Component {
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
        <AddForm title={'Reserve Fund'} />
        <ReserveCardDetailSummary title={'Reserve Fund Summary'}>
          <ReserveDetailInfo />
        </ReserveCardDetailSummary>
      </Fragment>
    );
  }
}

export default IncomeDetailMain;
