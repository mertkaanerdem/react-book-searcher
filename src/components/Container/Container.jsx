import React from "react";
import { BooksProvider } from "../../context/BooksContext";
import Books from "../Books/Books";
import Form from "../Form/Form";

function Container() {
  return (
    <BooksProvider>
      <Form />
      <Books />
    </BooksProvider>
  );
}

export default Container;
