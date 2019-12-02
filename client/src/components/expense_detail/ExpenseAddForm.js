import React, { Component, Fragment } from 'react';
import axios from 'axios';

class ExpenseAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      e_name: '',
      e_amount: '',
      loading: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log('from submitHandler', this.state);

    const data = {
      user_id: this.props.user_id, // from parent component
      e_name: this.state.e_name,
      e_amount: this.state.e_amount
    };

    // make POST request
    axios
      .post('./expense', data)
      .then(response => {
        console.log(response);
        console.log(response.data);

        // clear form
        this.setState(
          {
            e_name: '',
            e_amount: ''
          },
          this.props.doRefresh()
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { e_name, e_amount } = this.state;

    return (
      <Fragment>
        <div className="details__body">
          <div className="input">
            <p className="input__title">{this.props.title}</p>

            <form className="input__detail" onSubmit={this.submitHandler}>
              <div className="input__detail--name">
                <label>Name of Expense</label>
                <input
                  className="input-style"
                  type="text"
                  name="e_name"
                  value={e_name}
                  onChange={this.changeHandler}
                  required
                />
              </div>

              <div className="input__detail--amount">
                <label>Amount: $</label>
                <input
                  className="input-style"
                  type="text"
                  name="e_amount"
                  value={e_amount}
                  // onChange={e => onChange(e)}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <div className="input--button">
                <button className="add--button" type="submit">
                  Add to Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ExpenseAddForm;
