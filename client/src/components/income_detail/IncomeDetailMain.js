import React, { Component, Fragment } from 'react';
import IncomeAddForm from './IncomeAddForm';
import IncomeCardDetailSummary from './IncomeCardDetailSummary';
import IncomeDetailInfo from './IncomeDetailInfo';

class IncomeDetailMain extends Component {
  render() {
    return (
      <Fragment>
        <IncomeAddForm title={'Income'} />
        <IncomeCardDetailSummary title={'Income Summary'}>
          <IncomeDetailInfo />
        </IncomeCardDetailSummary>
      </Fragment>
    );
  }
}

export default IncomeDetailMain;
