import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import i18next from 'i18next';

import { getBookById } from '~services/booksService';

import { useRequest } from '../../hooks/useRequest';
import badge from '../../assets/badge.png';

import styles from './styles.module.scss';

function BookDetail() {
  const history = useHistory();
  const { pathname } = history.location;
  const bookId = pathname.split('/')[pathname.split('/').length - 1];
  const [state]: any = useRequest({ request: getBookById, payload: bookId }, []);
  const book = state ? state.data : false;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.backButton}>
        <Link to="/home" className={styles.linkItem}>
          <div className={styles.arrow}>
            <span className={styles.chevronLeft}>&lt;</span>
            <div>{i18next.t('BookDetail:goBack')}</div>
          </div>
        </Link>
      </div>

      {book && (
        <div className={styles.bookDetailContainer}>
          <img className={styles.badge} src={badge} alt="Badge" />
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
