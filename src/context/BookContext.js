import React, { createContext, useState } from "react";
import uuid from "uuid";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: "pelangi", author: "ridwan" },
    { id: 2, title: "bumi", author: "rahmat" },
    { id: 3, title: "bulan", author: "raja" }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  // console.log("book", books);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
