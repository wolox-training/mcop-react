import React, { useEffect, useRef, useState } from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { validations } from '~utils/validations';
import InputField from '~components/InputField';
import { login } from '~services/userService';
import PATHS from '~constants/paths';
import { saveInLocalStorage } from '~utils/session';

import logo from '../../assets/logo_full_color.svg';
import { useLazyRequest } from '../../hooks/useRequest';
import { User } from '../../../interfaces/user.interface';

import styles from './styles.module.scss';
import { SIGNUP_FIELDS } from './constants';

function SignIn() {
  const history = useHistory();
  const [loggedUser, setLoggedUser] = useState('');
  const { register, errors, handleSubmit, watch } = useForm<User>();
  const [wrongCredentials, setWrongCredentials] = useState('');
  const password = useRef({});
  password.current = watch('password', '');

  const [state, loading, error, sendRequest] = useLazyRequest({ request: login });
  const onSubmit = (user: User): void => {
    setLoggedUser(user.email);
    sendRequest(user);
  };

  useEffect(() => {
    if (error) {
      setWrongCredentials(i18next.t('Login:wrongCredentials'));
    } else if (state) {
      saveInLocalStorage(state);
      history.replace('/home');
    }
  }, [state, error, history, loggedUser]);

  return (
    <div className="row center middle">
      <div className={styles.signupContainer}>
        <img src={logo} alt="Logo" className={styles.signupLogo} />
        {wrongCredentials && <span className={styles.signupRequestError}>{wrongCredentials}</span>}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
          <InputField
            type="text"
            label={i18next.t('Login:email')}
            name={SIGNUP_FIELDS.email}
            inputRef={register({
              required: { value: true, message: i18next.t('Login:incompleteField') },
              pattern: {
                value: validations.emailPattern,
                message: i18next.t('Login:invalidEmail')
              }
            })}
            error={errors.email}
          />
          <InputField
            type="password"
            label={i18next.t('Login:password')}
            name={SIGNUP_FIELDS.password}
            inputRef={register({
              required: { value: true, message: i18next.t('Login:incompleteField') }
            })}
            error={errors.password}
          />
          <button type="submit" className={styles.signupGreenButton} disabled={loading}>
            {i18next.t('Login:login')}
          </button>
        </form>

        <Link to={PATHS.signUp} className={styles.signupGreyButton}>
          {i18next.t('Login:signup')}
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
