import React, { useState } from 'react';

import { emailRegex, formValid } from './validation';
/*eslint-disable */
export default function SignIn(props) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (formValid({ formErrors, firstName, lastName, email, password })) {
      console.log(`
        --SUBMITTING--
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}
      `);
      props.signIn({ email, password }); // call the sign in saga and register user
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? 'мінімум 3 символи' : '';
        setFirstName(value);
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? 'мінімум 3 символи' : '';
        setLastName(value);
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'неправильний email';
        setEmail(value);
        break;
      case 'password':
        formErrors.password = value.length < 6 ? 'мінімум 6 символи' : '';
        setPassword(value);
        break;
      default:
        break;
    }

    setFormErrors(formErrors);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">Ім*я</label>
            <input
              className={formErrors.firstName.length > 0 ? 'error' : null}
              placeholder="Ім*я"
              type="text"
              name="firstName"
              noValidate
              onChange={handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Призвіще</label>
            <input
              className={formErrors.lastName.length > 0 ? 'error' : null}
              placeholder="Призвіще"
              type="text"
              name="lastName"
              noValidate
              onChange={handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? 'error' : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Пароль</label>
            <input
              className={formErrors.password.length > 0 ? 'error' : null}
              placeholder="Пароль"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">Створити акаунт</button>
          </div>
        </form>
      </div>
    </div>
  );
}
