import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import logo from '../assets/logo_full_color.svg';

export const SignUp = () => {
  interface User {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    locale: string;
  }

  // To remove the warning in the console I don't use the state (in the future I'll need it)
  const [, setState] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    locale: 'en'
  });

  const { register, errors, handleSubmit } = useForm<User>();

  const onSubmit = (user: User): void => {
    setState(user);
  };

  const handleLogin = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    // Login code here
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Logo" className="signup-logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <label className="signup-input-description" htmlFor="firstName">
          Nombre
        </label>
        <input
          type="text"
          name="firstName"
          className="signup-input"
          autoComplete="off"
          ref={register({
            required: { value: true, message: 'Nombre obligatorio' }
          })}
        />
        {errors.firstName && <span className="signup-text-danger">{errors.firstName.message}</span>}
        <label className="signup-input-description" htmlFor="lastName">
          Apellido
        </label>
        <input
          type="text"
          name="lastName"
          className="signup-input"
          autoComplete="off"
          ref={register({
            required: { value: true, message: 'Apellido obligatorio' }
          })}
        />
        {errors.lastName && <span className="signup-text-danger">{errors.lastName.message}</span>}
        <label className="signup-input-description" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="signup-input"
          autoComplete="off"
          ref={register({
            required: { value: true, message: 'Email obligatorio' }
          })}
        />
        {errors.email && <span className="signup-text-danger">{errors.email.message}</span>}
        <label className="signup-input-description" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="signup-input"
          autoComplete="off"
          ref={register({
            required: { value: true, message: 'Password obligatorio' }
          })}
        />
        {errors.password && <span className="signup-text-danger">{errors.password.message}</span>}
        <label className="signup-input-description" htmlFor="passwordConfirmation">
          Confirmación de Password
        </label>
        <input
          type="password"
          name="passwordConfirmation"
          className="signup-input"
          autoComplete="off"
          ref={register({
            required: {
              value: true,
              message: 'Confirmación de Password obligatoria'
            }
          })}
        />
        {errors.passwordConfirmation && (
          <span className="signup-text-danger">{errors.passwordConfirmation.message}</span>
        )}
        <button type="submit" className="signup-green-button">
          Sign Up
        </button>
      </form>

      <hr className="signup-separator" />

      <button type="button" onClick={handleLogin} className="signup-grey-button">
        Login
      </button>
    </div>
  );
};
