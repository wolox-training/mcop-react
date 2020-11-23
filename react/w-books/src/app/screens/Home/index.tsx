import React, { useEffect, useState } from 'react';

import { getBooks } from '~services/booksService';

import BookList from '../../components/BookList';
import NavBar from '../../components/NavBar';

import styles from './styles.module.scss';

function Home() {
  const [books, setBooks] = useState();
  const fetchBooks = async () => {
    const resp = await getBooks();
    setBooks(resp);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      {books && <BookList books={books} />}
    </div>
  );
}

export default Home;
