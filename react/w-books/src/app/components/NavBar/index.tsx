import React from 'react';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';

import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';

function NavBar() {
  const history = useHistory();
  const handleLogout = (e: React.MouseEvent): void => {
    e.preventDefault();
    localStorage.clear();
    history.replace('/');
  };
  return (
    <div className={styles.navbarContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <button type="button" className={styles.nabvarLogout} onClick={handleLogout}>
        {i18next.t('Navbar:login')}
      </button>
    </div>
  );
}

export default NavBar;
