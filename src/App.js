import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/form'
import Table from './components/table'
import TableField from './components/tableField'
import './App.css';


function App() {
  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [isbn  , setIsbn] = useState("");
  const [currentBookId , setCurrentBookId] = useState(null);
  const [books , setBooks] = useState([
    {
      bookTitle :"Book1", 
      bookAuthor:"Raginee",
      bookIsbn:"123",
      bookId :uuidv4()
    }
  ]);

  const addBook =()=>{
    setBooks([...books , {
      bookTitle : title,
      bookAuthor : author,
      bookIsbn : isbn,
      bookId : uuidv4()
    }])
    console.log("books ",books)
  }

  const isInputInvalid =() =>{
    return(
      title.trim() ==="" || author.trim() === "" || isbn.trim() ===""
    )
  }

  const clearInput =() =>{
    setTitle('')
    setAuthor('')
    setIsbn('')
  }

  const removeBook =(id)=>{
    setBooks(books.filter(book =>book.bookId !== id))
  }
  const editBook =(book)=>{
    setTitle(book.bookTitle)
    setAuthor(book.bookAuthor)
    setIsbn(book.bookIsbn)
  }
  const handleClick =(e)=>{
    e.preventDefault();
    addBook()
    clearInput()
  }
  
  return (
    <div className="App">
      <div className="container">
      <h3>Book Management</h3>
        <Form title={title}
        setTitle = {setTitle}
        author = {author}
        setAuthor = {setAuthor}
        isbn = {isbn}
        setIsbn = {setIsbn}
        currentBookId = {currentBookId}
        setCurrentBookId = {setCurrentBookId}
        handleClick ={handleClick}
        />
      </div>
      <Table books={books} removeBook={removeBook} editBook={editBook}/>
    </div>
  );
}

export default App;
