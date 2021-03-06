import React, { Fragment } from 'react';
// import axios from 'axios';

const AddForm = props => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   amount: ''
  // });

  // const { name, amount } = formData; // pull name and amount out of form data

  // // onChange - let us type into the form
  // const onChange = e =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   const newIncomeGeneral = {
  //     name,
  //     amount
  //   };
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     };

  //     const body = JSON.stringify(newIncomeGeneral);

  //     const res = await axios.post('/income', body, config);
  //     console.log(res.data);
  //     alert('Hello from original');
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // };

  return (
    <Fragment>
      <div className="details__body">
        <div className="input">
          <p className="input__title">{props.title}</p>

          <form className="input__detail">
            <div className="input__detail--name">
              <label>Name of Income</label>
              <input
                className="input-style"
                type="text"
                name="name"
                // value={name}
                // onChange={e => onChange(e)}
                required
              />
            </div>

            <div className="input__detail--amount">
              <label>Amount: $</label>
              <input
                className="input-style"
                type="text"
                name="amount"
                // value={amount}
                // onChange={e => onChange(e)}
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

export default AddForm;
