import React from 'react';

import NavBar from '~components/NavBar';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
    </div>
  );
}

export default Home;
