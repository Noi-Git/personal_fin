import React, { Component, Fragment } from 'react';
import axios from 'axios';

class IncomeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      i_name: '',
      i_amount: '',
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
      i_name: this.state.i_name,
      i_amount: this.state.i_amount
    };

    // make POST request
    axios
      .post('./income', data)
      .then(response => {
        console.log(response);
        console.log(response.data);

        // clear form
        this.setState(
          {
            i_name: '',
            i_amount: ''
          },
          this.props.doRefresh()
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { i_name, i_amount } = this.state;

    return (
      <Fragment>
        <div className="details__body">
          <div className="input">
            <p className="input__title">{this.props.title}</p>

            <form className="input__detail" onSubmit={this.submitHandler}>
              <div className="input__detail--name">
                <label>Name of Income</label>
                <input
                  className="input-style"
                  type="text"
                  name="i_name"
                  value={i_name}
                  onChange={this.changeHandler}
                  required
                />
              </div>

              <div className="input__detail--amount">
                <label>Amount: $</label>
                <input
                  className="input-style"
                  type="text"
                  name="i_amount"
                  value={i_amount}
                  // onChange={this.changeHandler}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <div className="input--button">
                <button className="add--button" type="submit">
                  Add to Income
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default IncomeAddForm;
