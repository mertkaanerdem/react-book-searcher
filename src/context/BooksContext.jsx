import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchedName}`)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [searchedName]);

  const values = {
    books,
    setBooks,
    searchName,
    setSearchName,
    loading,
    setLoading,
    searchedName,
    setSearchedName,
  };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
}

const useBooks = () => useContext(BooksContext);

export { BooksProvider, useBooks };
