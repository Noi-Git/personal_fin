import React, { Component, Fragment } from 'react';

class AddForm extends Component {
  /*
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
	};*/

  // get result from server API
  onSubmit = e => {
    e.preventDefault();
    this.props.searchIncome(this.state.text);
    this.setState({ text: '' }); //clear search form after sumit
  };

  onChange = e => {
    // this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value }); //use with multiple target
  };

  render() {
    return (
      <Fragment>
        <div className="details__body">
          <div className="input">
            <p className="input__title">Income</p>

            <form onSubmit={this.onSubmit} className="input__detail">
              <div className="input__detail--name">
                <label>Name of Income</label>
                <input
                  className="input-style"
                  type="text"
                  name="text"
                  value={this.text}
                  onChange={this.onChange}
                />
              </div>

              <div className="input__detail--amount">
                <label>Amount: $</label>
                <input
                  className="input-style"
                  type="text"
                  name="text"
                  value={this.text}
                  onChange={this.onChange}
                />
              </div>
              <div className="input--button">
                <input type="submit" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddForm;
