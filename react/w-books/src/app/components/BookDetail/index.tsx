import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import i18next from 'i18next';

import styles from './styles.module.scss';

interface Book {
  id: number | '';
  author: string | '';
  title: string | '';
  image_url: string | '';
  editor: string | '';
  year: string | '';
  genre: string | '';
  // eslint-disable-next-line
  current_rent: string | '';
}

const initialState: Book = {
  id: '',
  author: '',
  title: '',
  // eslint-disable-next-line
  image_url: '',
  editor: '',
  year: '',
  genre: '',
  // eslint-disable-next-line
  current_rent: ''
};

function BookDetail() {
  const history = useHistory();
  const [book, setBook] = useState(initialState);
  useEffect(() => {
    const { pathname } = history.location;
    const url = `${process.env.REACT_APP_API_BASE_URL}${pathname}`;

    const headers = {
      'access-token': localStorage.getItem('access-token'),
      uid: localStorage.getItem('uid'),
      client: localStorage.getItem('client')
    };
    axios.get(url, { params: headers }).then(r => {
      setBook(r.data);
    });
  }, [history.location]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.backButton}>
        <Link to="/home">
          <div className={styles.arrow}>
            <span className={styles.chevronLeft}>&lt;</span>
            <div>{i18next.t('BookDetail:goBack')}</div>
          </div>
        </Link>
      </div>

      {book.id && (
        <div className={styles.bookDetailContainer}>
          <img src={book.image_url} alt={book.title} className={styles.bookImage} />
          <div className={styles.descriptionContainer}>
            <div className={styles.bookTitle}>
              {book.title} <div className={styles.genre}>({book.genre})</div>
            </div>
            <div className={styles.bookInformation}>
              <div className={styles.bold}>{i18next.t('BookDetail:author')} </div> {book.author}
            </div>
            <div className={styles.bookInformation}>
              <div className={styles.bold}>{i18next.t('BookDetail:editor')} </div> {book.editor}
            </div>
            <div className={styles.bookInformation}>
              <div className={styles.bold}>{i18next.t('BookDetail:year')} </div> {book.year}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
