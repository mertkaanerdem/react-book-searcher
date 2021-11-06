import * as React from "react";
import { BooksProvider } from "../../context/BooksContext";
import Books from "../Books/Books";
import Book from "../Book/Book";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";

import styles from "./container.module.css";

import { Routes, Route } from "react-router-dom";

function Container() {
  return (
    <div className={styles.Container}>
      <Header />
      <BooksProvider>
        <Form />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/:id" element={<Book />} />
        </Routes>
      </BooksProvider>
      <Footer />
    </div>
  );
}

export default Container;
