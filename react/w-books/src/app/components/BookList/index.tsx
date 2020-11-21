import React from 'react';
import { useHistory } from 'react-router-dom';

import { Book } from '../../../interfaces/book.interface';

import styles from './styles.module.scss';

interface BookList {
  books: [Book];
}

function BookList(books: BookList) {
  const history = useHistory();
  const bookList = books.books;

  const handleBookDetail = (id: string) => {
    history.push(`/books/${id}`);
  };
  return (
    <div className={styles.container}>
      {bookList &&
        bookList.map((book: Book) => (
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
