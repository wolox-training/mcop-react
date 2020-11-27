import React from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router-dom';

import { actionCreators } from '../../contexts/UserContext/reducer';
import logo from '../../assets/logo_full_color.svg';
import { useDispatch } from '../../contexts/UserContext';

import styles from './styles.module.scss';

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e: React.MouseEvent): void => {
    e.preventDefault();
    dispatch(actionCreators.resetUser());
    history.push('/');
  };
  return (
    <div className={`row middle space-around ${styles.navbarContainer}`}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <button type="button" className={styles.nabvarLogout} onClick={handleLogout}>
        {i18next.t('Navbar:login')}
      </button>
    </div>
  );
}

export default NavBar;
