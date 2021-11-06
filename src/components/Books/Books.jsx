import React from "react";

import { useBooks } from "../../context/BooksContext";

function Books() {
  const { books, loading } = useBooks();

  return (
    <>
      {loading && <div>LOADING</div>}

      {books.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </>
  );
}

export default Books;
