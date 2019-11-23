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

  // searchIncome = text => {
  //   console.log(text);
  //   /* move query to here when doing the search */
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const userFromAuth0 = this.context.user;

  //   const res = await axios({
  //     url: 'http://localhost:5000/income',
  //     method: 'POST',
  //     data: {
  //       username: userFromAuth0.name,
  //       email: userFromAuth0.email,
  //       sub: userFromAuth0.sub
  //     }
  //   });
  //   console.log(res.data);
  //   const userFromBackend = res.data.user;
  //   const budgetFromBackend = res.data.budget;
  //   console.log('userFromBackend', userFromBackend);
  //   console.log('budgetFromBackend:', budgetFromBackend);

  //   this.setState({
  //     loading: false,
  //     user_id: userFromBackend.id,
  //     total_income: budgetFromBackend.total_income,
  //     total_expense: budgetFromBackend.total_expense,
  //     total_reserve: budgetFromBackend.total_reserve
  //   });
  // }

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
