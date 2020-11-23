import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import i18next from 'i18next';

import { getBookById } from '~services/booksService';

import styles from './styles.module.scss';

const initialState = {
  id: '',
  author: '',
  title: '',
  imageUrl: '',
  editor: '',
  year: '',
  genre: '',
  currentRent: ''
};

function BookDetail() {
  const history = useHistory();
  const [book, setBook] = useState(initialState);

  useEffect(() => {
    async function fetchBook() {
      const { pathname } = history.location;
      const bookId = pathname.split('/')[pathname.split('/').length - 1];
      const resp = await getBookById(bookId);
      setBook(resp);
    }

    fetchBook();
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
          <img src={book.imageUrl} alt={book.title} className={styles.bookImage} />
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
