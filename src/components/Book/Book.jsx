import React from "react";
import { useParams, Link } from "react-router-dom";
import { useBooks } from "../../context/BooksContext";
function Book() {
  const { id } = useParams();

  const { books } = useBooks();

  const filteredBook = books.filter((item) => item.id === id);

  return (
    <div>
      {filteredBook.map((book) => (
        <>
          <p>{book.volumeInfo.title}</p>
          <Link to="/">Go to home page</Link>
        </>
      ))}
    </div>
  );
}

export default Book;
