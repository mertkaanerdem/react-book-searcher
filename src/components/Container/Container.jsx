import React from "react";
import { BooksProvider } from "../../context/BooksContext";
import Books from "../Books/Books";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";

import styles from "./container.module.css";

function Container() {
  return (
    <div className={styles.Container}>
      <Header />
      <BooksProvider>
        <Form />
        <Books />
      </BooksProvider>
      <Footer />
    </div>
  );
}

export default Container;
