import React, { Component, Fragment } from 'react';
import ExpenseAddForm from './AddForm';
import ExpenseCardDetailSummary from './CardDetailSummary';
import ExpenseDetailInfo from './DetailInfo';

class ExpenseDetailMain extends Component {
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
        <ExpenseAddForm title={'Expense'} />
        <ExpenseCardDetailSummary title={'Expense Summary'}>
          <ExpenseDetailInfo title="grocery" amount="70" />
          <ExpenseDetailInfo title="lunch" amount="12" />
          <ExpenseDetailInfo title="dinner" amount="20" />
          <ExpenseDetailInfo title="bart" amount="50" />
          <ExpenseDetailInfo title="grocery" amount="35" />
          <ExpenseDetailInfo title="dinner" amount="17" />
        </ExpenseCardDetailSummary>
      </Fragment>
    );
  }
}

export default ExpenseDetailMain;
