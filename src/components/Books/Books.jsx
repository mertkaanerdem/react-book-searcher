import styles from "./books.module.css";
import placer from "../../assets/placer.jpg";
import { useBooks } from "../../context/BooksContext";
import { Link } from "react-router-dom";

function Books() {
  const { books, loading } = useBooks();

  return (
    <div className={styles.booksContainer}>
      {loading && <div>LOADING</div>}

      {books.map((book) => (
        <div className={styles.bookCard} key={book.id}>
          <img
            alt={book.volumeInfo.imageLinks?.thumbnail}
            src={book.volumeInfo.imageLinks?.thumbnail || placer}
            className={styles.image}
          />
          <p className={styles.title}>
            <span>{book.volumeInfo.title}</span>
          </p>
          <>
            Author(s):
            {book.volumeInfo.authors.map((author, i) => (
              <span key={i}> {author}</span>
            ))}
          </>
          <p className={styles.date}>{book.volumeInfo.publishedDate}</p>
          <Link to={`/${book.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Books;
