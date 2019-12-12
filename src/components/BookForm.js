import React, { useState, useContext, Component } from 'react';
import {BookContext} from '../context/BookContext'

const BookForm = () => {
  const {addBook} = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }

  // const onChange = () = {
  //   set
  // }


  return ( 
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='title' onChange={(e)=> setTitle(e.target.value)} required/>
      <input type='text' placeholder='author' onChange={(e)=> setAuthor(e.target.value)} required/>
      <input type='submit' />
    </form>
   );
}
 
export default BookForm;