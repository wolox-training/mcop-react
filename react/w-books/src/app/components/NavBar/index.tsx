import React from 'react';
import i18next from 'i18next';

import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';

function NavBar() {
  const handleLogout = (e: React.MouseEvent): void => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
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
