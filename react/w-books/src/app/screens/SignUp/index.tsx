import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';

interface User {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  locale: string;
}
function SignUp() {
  // To remove the warning in the console I don't use the state (in the future I'll need it)
  const [, setState] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    locale: 'en'
  });

  const { register, errors, handleSubmit, watch } = useForm<User>();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (user: User): void => {
    setState(user);
  };

  const handleLogin = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    // Login code here
  };

  return (
    <div className={styles.signupContainer}>
      <img src={logo} alt="Logo" className={styles.signupLogo} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
        <label className={styles.signupInputDescription} htmlFor="firstName">
          {i18next.t('SignUp:firstName')}
        </label>
        <input
          type="text"
          name="firstName"
          className={styles.signupInput}
          autoComplete="off"
          ref={register({
            required: { value: true, message: i18next.t('SignUp:nameRequired') }
          })}
        />
        {errors.firstName && <span className={styles.signupTextDanger}>{errors.firstName.message}</span>}
        <label className={styles.signupInputDescription} htmlFor="lastName">
          {i18next.t('SignUp:lastName')}
        </label>
        <input
          type="text"
          name="lastName"
          className={styles.signupInput}
          autoComplete="off"
          ref={register({
            required: { value: true, message: i18next.t('SignUp:lastNameRequired') }
          })}
        />
        {errors.lastName && <span className={styles.signupTextDanger}>{errors.lastName.message}</span>}
        <label className={styles.signupInputDescription} htmlFor="email">
          {i18next.t('SignUp:email')}
        </label>
        <input
          type="text"
          name="email"
          className={styles.signupInput}
          autoComplete="off"
          ref={register({
            required: { value: true, message: i18next.t('SignUp:emailRequired') },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: i18next.t('SignUp:invalidEmail')
            }
          })}
        />
        {errors.email && <span className={styles.signupTextDanger}>{errors.email.message}</span>}
        <label className={styles.signupInputDescription} htmlFor="password">
          {i18next.t('SignUp:password')}
        </label>
        <input
          type="password"
          name="password"
          className={styles.signupInput}
          autoComplete="off"
          ref={register({
            required: { value: true, message: i18next.t('SignUp:passwordRequired') }
          })}
        />
        {errors.password && <span className={styles.signupTextDanger}>{errors.password.message}</span>}
        <label className={styles.signupInputDescription} htmlFor="passwordConfirmation">
          {i18next.t('SignUp:passwordConfirmation')}
        </label>
        <input
          type="password"
          name="passwordConfirmation"
          className={styles.signupInput}
          autoComplete="off"
          ref={register({
            required: {
              value: true,
              message: i18next.t('SignUp:passwordConfirmationRequired')
            },
            validate: value => value === password.current || `${i18next.t('SignUp:passwordDoesNotMatch')}`
          })}
        />
        {errors.passwordConfirmation && (
          <span className={styles.signupTextDanger}>{errors.passwordConfirmation.message}</span>
        )}
        <button type="submit" className={styles.signupGreenButton}>
          {i18next.t('SignUp:signUp')}
        </button>
      </form>

      <hr className={styles.signupSeparator} />

      <button type="button" onClick={handleLogin} className={styles.signupGreyButton}>
        {i18next.t('SignUp:login')}
      </button>
    </div>
  );
}

export default SignUp;
