import React, { useRef } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { validations } from '~utils/validations';
import InputField from '~components/InputField';
import { signUp } from '~services/userService';

import logo from '../../assets/logo_full_color.svg';
import { useLazyRequest } from '../../hooks/useRequest';
import { User } from '../../../interfaces/user.interface';

import styles from './styles.module.scss';
import { SIGNUP_FIELDS } from './constants';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm<User>();
  const password = useRef({});
  password.current = watch('password', '');

  const [, , error, sendRequest] = useLazyRequest({ request: signUp });
  const onSubmit = (user: User): void => {
    user.locale = 'en';
    sendRequest(user);
  };

  return (
    <div className={styles.signupContainer}>
      <img src={logo} alt="Logo" className={styles.signupLogo} />
      {error && <span className={styles.signupRequestError}>{error.problem}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
        <InputField
          type="text"
          label={i18next.t('SignUp:firstName')}
          name={SIGNUP_FIELDS.firstName}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:nameRequired') }
          })}
          error={errors.first_name}
        />
        <InputField
          type="text"
          label={i18next.t('SignUp:lastName')}
          name={SIGNUP_FIELDS.lastName}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:lastNameRequired') }
          })}
          error={errors.last_name}
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
          error={errors.password_confirmation}
        />
        <button type="submit" className={styles.signupGreenButton}>
          {i18next.t('SignUp:signup')}
        </button>
      </form>

      <Link to="/" className={styles.signupGreyButton}>
        {i18next.t('SignUp:login')}
      </Link>
    </div>
  );
}

export default SignUp;
