import * as React from "react";
import { BooksProvider } from "../../context/BooksContext";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Books from "../Books/Books";
import Book from "../Book/Book";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BooksProvider>
      <Footer />
    </div>
  );
}

export default Container;
