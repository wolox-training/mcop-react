import React, { useState, useRef } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import { validations } from '~utils/validations';
import InputField from '~components/InputField';

import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';
import { SIGNUP_FIELDS } from './constants';

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
        <InputField
          type="text"
          label={i18next.t('SignUp:firstName')}
          name={SIGNUP_FIELDS.firstName}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:nameRequired') }
          })}
          error={errors.firstName}
        />
        <InputField
          type="text"
          label={i18next.t('SignUp:lastName')}
          name={SIGNUP_FIELDS.lastName}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:lastNameRequired') }
          })}
          error={errors.lastName}
        />
        <InputField
          type="text"
          label={i18next.t('SignUp:email')}
          name={SIGNUP_FIELDS.email}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:emailRequired') },
            pattern: {
              value: validations.emailPattern,
              message: i18next.t('SignUp:invalidEmail')
            }
          })}
          error={errors.email}
        />
        <InputField
          type="password"
          label={i18next.t('SignUp:password')}
          name={SIGNUP_FIELDS.password}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:passwordRequired') }
          })}
          error={errors.password}
        />
        <InputField
          type="password"
          label={i18next.t('SignUp:passwordConfirmation')}
          name={SIGNUP_FIELDS.passwordConfirmation}
          inputRef={register({
            required: {
              value: true,
              message: i18next.t('SignUp:passwordConfirmationRequired')
            },
            validate: value => value === password.current || `${i18next.t('SignUp:passwordDoesNotMatch')}`
          })}
          error={errors.passwordConfirmation}
        />
        <button type="submit" className={styles.signupGreenButton}>
          {i18next.t('SignUp:signUp')}
        </button>
      </form>

      <button type="button" onClick={handleLogin} className={styles.signupGreyButton}>
        {i18next.t('SignUp:login')}
      </button>
    </div>
  );
}

export default SignUp;
