import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function BookDetail() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backButton}>
        <Link to="/home">
          <div className={styles.arrow}>
            <span className={styles.chevronLeft}>&lt;</span>
            <div>Atrás</div>
          </div>
        </Link>
      </div>
      <div className={styles.bookDetailContainer}>
        <img
          src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8118/9780811870191.jpg"
          alt="Image"
          className={styles.bookImage}
        />
        <div className={styles.descriptionContainer}>
          <div className={styles.bookTitle}>
            Título del libro <div className={styles.genre}>(género)</div>
          </div>
          <div className={styles.bookInformation}>
            <div className={styles.bold}>Autor del libro: </div> Nombre del autor del libro
          </div>
          <div className={styles.bookInformation}>
            <div className={styles.bold}>Editorial: </div> Nombre de la editorial
          </div>
          <div className={styles.bookInformation}>
            <div className={styles.bold}>Año de publicación: </div> Año de publicación
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
