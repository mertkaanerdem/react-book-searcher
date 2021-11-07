import React from "react";
import { useParams, Link } from "react-router-dom";
import { useBooks } from "../../context/BooksContext";

import styles from "./book.module.css";
import placer from "../../assets/placer.jpg";
function Book() {
  const { id } = useParams();

  const { books } = useBooks();

  const filteredBook = books.filter((item) => item.id === id);

  return (
    <div className={styles.Container}>
      {filteredBook.map((book) => (
        <div key={book.id} className={styles.bookContainer}>
          <img
            alt={book.volumeInfo.imageLinks?.thumbnail}
            src={book.volumeInfo.imageLinks?.thumbnail || placer}
            className={styles.image}
          />
          <div className={styles.content}>
            <p className={styles.title}>{book.volumeInfo.title}</p>
            <p className={styles.subtitle}>{book.volumeInfo.subtitle}</p>
            <div className={styles.author}>
              Author(s):
              {book.volumeInfo.authors.map((author, i) => (
                <span className={styles.author} key={i}>
                  {" "}
                  {author}
                </span>
              ))}
            </div>
            <p className={styles.date}>{book.volumeInfo.publishedDate}</p>
            <p className={styles.description}>{book.volumeInfo.description}</p>
            <Link className={styles.button} to="/">
              Go to home page
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
