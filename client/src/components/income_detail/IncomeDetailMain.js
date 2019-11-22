import React, { Component, Fragment } from 'react';
import IncomeAddForm from './IncomeAddForm';
import IncomeCardDetailSummary from './IncomeCardDetailSummary';
import IncomeDetailInfo from './IncomeDetailInfo';

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
        <IncomeAddForm title={'Income'} />
        <IncomeCardDetailSummary title={'Income Summary'}>
          <IncomeDetailInfo title="work at place 1" amount="400" />
          <IncomeDetailInfo title="work at ABC company" amount="80" />
          <IncomeDetailInfo title="work at company at home" amount="1200" />
          <IncomeDetailInfo title="work alone" amount="12000" />
        </IncomeCardDetailSummary>
      </Fragment>
    );
  }
}

export default IncomeDetailMain;
