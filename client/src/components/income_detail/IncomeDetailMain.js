import React, { Component, Fragment } from 'react';
import IncomeAddForm from './IncomeAddForm';
import IncomeCardDetailSummary from './IncomeCardDetailSummary';
import IncomeDetailInfo from './IncomeDetailInfo';
import axios from 'axios';
import { Auth0Context } from '../../react-auth0-spa';

class IncomeDetailMain extends Component {
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
      url: 'https://my-money-pal.herokuapp.com/user',
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

  render() {
    return (
      <Fragment>
        <IncomeAddForm
          title={'Income'}
          user_id={this.state.user_id}
          doRefresh={this.doRefresh}
        />
        <IncomeCardDetailSummary title={'Income Summary'}>
          <IncomeDetailInfo
            isRefresh={this.state.isRefresh}
            doRefresh={this.doRefresh}
          />
        </IncomeCardDetailSummary>
      </Fragment>
    );
  }
}

export default IncomeDetailMain;
