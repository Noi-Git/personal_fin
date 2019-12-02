import React, { Component, Fragment } from 'react';
import ExpenseAddForm from './ExpenseAddForm';
import ExpenseCardDetailSummary from './ExpenseCardDetailSummary';
import ExpenseDetailInfo from './ExpenseDetailInfo';
import axios from 'axios';
import { Auth0Context } from '../../react-auth0-spa';

class ExpenseDetailMain extends Component {
  /* connect to database goes here -- watch lesson 18 */
  static contextType = Auth0Context;
  constructor() {
    super();
    this.state = {
      user_id: '',
      isRefresh: false
    };
  }

  async componentDidMount() {
    const userFromAuth0 = await this.context.user;

    const res = await axios({
      url: 'http://localhost:5000/user',
      method: 'POST',
      data: {
        username: userFromAuth0.name,
        email: userFromAuth0.email,
        sub: userFromAuth0.sub
      }
    });
    console.log('[IncomeDetailMain]', res.data);
    this.setState({ user_id: res.data.user.id });
  }

  doRefresh = () => {
    this.setState(prevState => ({ isRefresh: !prevState.isRefresh }));
  };

  // searchIncome = text => {
  //   console.log(text);
  //   /* move query to here when doing the search */
  // };

  render() {
    return (
      <Fragment>
        <ExpenseAddForm
          title={'Expense'}
          user_id={this.state.user_id}
          doRefresh={this.doRefresh}
        />
        <ExpenseCardDetailSummary title={'Expense Summary'}>
          <ExpenseDetailInfo
            isRefresh={this.state.isRefresh}
            doRefresh={this.doRefresh}
          />
        </ExpenseCardDetailSummary>
      </Fragment>
    );
  }
}

export default ExpenseDetailMain;
