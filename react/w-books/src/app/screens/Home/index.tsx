import React from 'react';

import { getBooks } from '~services/booksService';

import { useRequest } from '../../hooks/useRequest';
import BookList from '../../components/BookList';
import NavBar from '../../components/NavBar';

import styles from './styles.module.scss';

function Home() {
  const [state]: any = useRequest({ request: getBooks, payload: {} }, []);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      {state && <BookList books={state.data.page} />}
    </div>
  );
}

export default Home;
