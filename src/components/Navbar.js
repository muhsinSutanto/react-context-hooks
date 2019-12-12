import React, { Component, useContext } from "react";
import {BookContext} from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='App'>
      <h1>My Reading list</h1>
      <p> you should finish {books.length} books ...</p>
    </div>
  );
};

export default Navbar;
