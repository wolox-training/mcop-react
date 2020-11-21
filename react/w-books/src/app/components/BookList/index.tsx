import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

function BookList(books: any) {
  const history = useHistory();
  const iterateBooks = books.books;

  const handleBookDetail = (id: string) => {
    history.push(`/books/${id}`);
  };
  return (
    <div className={styles.container}>
      {iterateBooks &&
        iterateBooks.map((book: any) => (
          <div
            className={`${styles.item}`}
            key={book.id}
            onClick={e => {
              e.preventDefault();
              handleBookDetail(book.id);
            }}
          >
            <div className={styles.bookContainer}>
              <img className={styles.bookImage} src={book.image_url} alt={book.image_url} />
              <div className={styles.bookTitle}>{book.title}</div>
              <p>{book.author}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookList;
