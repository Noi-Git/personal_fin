import React, { Component, Fragment } from 'react';
import AddForm from './AddForm';
import CardDetailSummary from './CardDetailSummary';
import DetailInfo from './DetailInfo';

class DetailMain extends Component {
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
        <AddForm title={'Income'} />
        <CardDetailSummary title={'Income Summary'}>
          <DetailInfo title="work at place 1" amount="400" />
          <DetailInfo title="work at ABC company" amount="80" />
          <DetailInfo title="work at company at home" amount="1200" />
          <DetailInfo title="work alone" amount="12000" />
        </CardDetailSummary>
      </Fragment>
    );
  }
}

export default DetailMain;
