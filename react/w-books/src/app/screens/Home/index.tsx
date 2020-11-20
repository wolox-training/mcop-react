import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { useRequest } from 'app/hooks/useRequest';
import BookList from '~components/BookList';
import NavBar from '~components/NavBar';
// import { getBooks } from '~services/booksService';

import styles from './styles.module.scss';

function Home() {
  const [books, setBooks] = useState();
  useEffect(() => {
    const headers = {
      'access-token': localStorage.getItem('access-token'),
      uid: localStorage.getItem('uid'),
      client: localStorage.getItem('client')
    };
    axios.get('https://books-training-rails.herokuapp.com/api/v1/books', { params: headers }).then(r => {
      setBooks(r.data.page);
    });
  }, []);
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      {books !== null && <BookList books={books} />}
    </div>
  );
}

export default Home;
