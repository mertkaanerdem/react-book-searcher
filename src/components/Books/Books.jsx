import styles from "./books.module.css";

import { useBooks } from "../../context/BooksContext";

function Books() {
  const { books, loading } = useBooks();

  return (
    <div className={styles.booksContainer}>
      {loading && <div>LOADING</div>}

      {books.map((book) => (
        <div className={styles.bookCard} key={book.id}>
          <img
            alt={book.volumeInfo.imageLinks?.thumbnail}
            src={book.volumeInfo.imageLinks?.thumbnail}
            className={styles.image}
          />
          <p>
            Title: <span>{book.volumeInfo.title}</span>
          </p>
          Author(s):
          {book.volumeInfo.authors.map((author, i) => (
            <p key={i}>{author}</p>
          ))}
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Books;
