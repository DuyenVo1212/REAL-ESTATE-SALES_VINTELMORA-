import Input from '../../components/Input';
import './SellRegister.scss';
import { SELL_REGISTER } from './constants';
import Button from '../../components/Button';
import { useState } from 'react';

function SellRegister() {
  // This state holds the data for the form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    reln: '',
    address: '',
  });

  // This state holds the error messages for the form fields
  const [errorForm, setErrorForm] = useState();

  // This function checks if a value is provided
  const isRequired = (value, message) => {
    if (typeof value === 'string') {
      return value.trim() ? undefined : message || 'This field is required';
    } else {
      return value ? undefined : message || 'This field is required';
    }
  };

  // The function isEmail is a validation function that checks if a given value is in a valid email format
  const isEmail = (value, message) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ? undefined : message || 'This field must be an email';
  };

  // This function is used to validate all fields in the form when the form is submitted
  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const errorMessage = isRequired(formData[key]);
      if (errorMessage) {
        errors[key] = errorMessage;
      }
    });

    // Additional email validation for email field
    if (!errors.email) {
      const emailError = isEmail(formData.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    setErrorForm(errors);

    return Object.keys(errors).length === 0;
  };

  // This function updates the state of formData whenever the value of an input field changes.
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function will clear the error message for the input field that is focused on
  const handleOnFocus = (e) => {
    const { name } = e.target;
    setErrorForm((prev) => ({ ...prev, [name]: undefined }));
  };

  //  This function will validate the input field when it loses focus and set the appropriate error message if there is a validation error.
  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = isRequired(value);
    if (name === 'email' && !errorMessage) {
      errorMessage = isEmail(value);
    }
    setErrorForm((prev) => ({ ...prev, [name]: errorMessage }));
  };

  // This function handles the form submission, validates the form data, and submits the form if the data is valid.
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let validate = validateForm();
    if (validate) {
      console.log('Form submitted successfully', formData);
      // Submit the form data
    } else {
      console.log('Form contains errors', errorForm);
    }
  };

  return (
    <div className='sell-register'>
      <form className='sell-register__form' onSubmit={handleOnSubmit}>
        <h2 className='sell-register__form--title'>seller information</h2>

        <div className='sell-register__form--wrapper'>
          {SELL_REGISTER.map((item) => {
            let type = item.prettier;
            let Component = Input[type];
            let name = item.name;

            return (
              <Component
                key={name}
                {...item}
                messages={errorForm?.[name]}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
              />
            );
          })}
        </div>

        <Button type='submit' className='sell-register__form--submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SellRegister;
