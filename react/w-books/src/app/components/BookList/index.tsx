import React from 'react';

import styles from './styles.module.scss';

function BookList() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.item1}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.item2}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.item3}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.item4}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.item5}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.item6}`}>
        <div className={styles.bookContainer}>
          <img
            className={styles.bookImage}
            src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
            alt="image"
          />
          <h3 className={styles.bookTitle}>Título del libro</h3>
          <p>Autor del libro</p>
        </div>
      </div>
    </div>
  );
}

export default BookList;
