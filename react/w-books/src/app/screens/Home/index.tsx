import React from 'react';

import BookList from '~components/BookList';
import NavBar from '~components/NavBar';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <BookList />
    </div>
  );
}

export default Home;
