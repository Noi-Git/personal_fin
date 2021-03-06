import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ExpenseDetailInfo extends Component {
  state = {
    lists: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('./expense');
    console.log(res);
    this.setState({ lists: res.data, loading: false });
  }

  async componentDidUpdate(prevProps) {
    if (!prevProps.isRefresh && this.props.isRefresh) {
      this.setState({ loading: true });

      const res = await axios.get('./expense');
      // console.log(res);
      this.setState({ lists: res.data, loading: false });

      this.props.doRefresh();
    }
  }

  deleteHandler = (e, prevProps) => {
    // e.preventDefault();

    const index = e.target.parentNode.parentNode.getAttribute('index');
    console.log('before axios index', index);
    const itemToDelete = this.state.lists[index];
    console.log('itemToDelete:', itemToDelete);

    const data = {
      data: { id: itemToDelete.id }
    };

    axios
      .delete('/expense', data)
      .then(response => {
        console.log('response from axios', response);
        console.log('from axios delete', response.data);

        this.props.doRefresh();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // componentDidMount() {
  //   axios.get('./expense').then(res => {
  //     console.log('from expense detail info ', res);
  //     this.setState({ lists: res.data });
  //   });
  // }

  render() {
    // destructure
    const { lists } = this.state;

    return (
      <Fragment>
        <div key="list.id" className="summary__details">
          {lists.map((list, index) => (
            <p key={index} index={index} className="summary__details--name">
              {list.e_name}
              <span className="go-right">
                <i
                  className="fa fa-trash-o trash--button"
                  aria-hidden="true"
                  onClick={this.deleteHandler}
                ></i>
              </span>
              &nbsp;&nbsp;
              <span className="go-right">
                <i className="fa fa-pencil edit--button" aria-hidden="true"></i>
              </span>
              &nbsp;&nbsp;
              <span className="go-right">{list.e_amount}&nbsp;&nbsp;</span>
              <span className="go-right">$&nbsp;</span>
            </p>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ExpenseDetailInfo;
