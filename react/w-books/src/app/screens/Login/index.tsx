import React, { useEffect, useRef } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { validations } from '~utils/validations';
import InputField from '~components/InputField';
import { login } from '~services/userService';

import logo from '../../assets/logo_full_color.svg';
import { useLazyRequest } from '../../hooks/useRequest';
import { User } from '../../../interfaces/user.interface';

import styles from './styles.module.scss';
import { SIGNUP_FIELDS } from './constants';

function SignUp() {
  const { register, errors, handleSubmit, watch } = useForm<User>();
  const password = useRef({});
  password.current = watch('password', '');

  const [state, , error, sendRequest] = useLazyRequest({ request: login });
  const onSubmit = (user: User): void => {
    sendRequest(user);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={styles.signupContainer}>
      <img src={logo} alt="Logo" className={styles.signupLogo} />
      {error && <span className={styles.signupRequestError}>{error.problem}</span>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
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
          type="text"
          label={i18next.t('SignUp:password')}
          name={SIGNUP_FIELDS.password}
          inputRef={register({
            required: { value: true, message: i18next.t('SignUp:passwordRequired') }
          })}
          error={errors.password}
        />
        <button type="submit" className={styles.signupGreenButton}>
          {i18next.t('SignUp:login')}
        </button>
      </form>

      <Link to="/sign_up" className={styles.signupGreyButton}>
        {i18next.t('SignUp:signup')}
      </Link>
    </div>
  );
}

export default SignUp;
