import React from 'react';
import { useHistory } from 'react-router-dom';

import { Book } from '../../../interfaces/book.interface';

import styles from './styles.module.scss';

interface Props {
  books: [Book] | undefined;
}

function BookList({ books }: Props) {
  const history = useHistory();

  const handleBookDetail = (id: string) => {
    history.push(`/books/${id}`);
  };
  return (
    <div className={styles.container}>
      {books &&
        books.map((book: Book) => (
          <div
            className={styles.item}
            key={book.id}
            onClick={e => {
              e.preventDefault();
              handleBookDetail(book.id);
            }}
          >
            <div className={styles.bookContainer}>
              <img className={styles.bookImage} src={book.imageUrl} alt={book.imageUrl} />
              <div className={styles.bookTitle}>{book.title}</div>
              <p>{book.author}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookList;
