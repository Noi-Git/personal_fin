import React, { Fragment, useState } from 'react';
import axios from 'axios';

const ReserveIncomeAddForm = props => {
  const [formData, setFormData] = useState({
    name: '',
    amount: ''
  });

  const { name, amount } = formData; // pull name and amount out of form data

  // onChange - let us type into the form
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   e.priventDefault();
  //   if (name.lenght === 0 || amount.length === 0) {
  //     console.log('Please make sure you fill all infomation');
  //   } else {
  //     const newData = {
  //       i_name,
  //       i_amount
  //     };

  //     try {
  //       const config = {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       };

  //       const body = JSON.stringify(newData);
  //       const res = axios.post('/api/users', body, config);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error(err.response.data);
  //     }
  //   }
  // };

  const onSubmit = async e => {
    e.preventDefault();
    const newReserve = {
      name,
      amount
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(newReserve);

      const res = await axios.post('/api/reserve', body, config);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Fragment>
      <div className="details__body">
        <div className="input">
          <p className="input__title">{props.title}</p>

          <form className="input__detail" onSubmit={e => onSubmit(e)}>
            <div className="input__detail--name">
              <label>Name of Reserve Fund</label>
              <input
                className="input-style"
                type="text"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
            </div>

            <div className="input__detail--amount">
              <label>Amount: $</label>
              <input
                className="input-style"
                type="text"
                name="amount"
                value={amount}
                onChange={e => onChange(e)}
                required
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
};

export default ReserveIncomeAddForm;
