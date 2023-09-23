import Form from "../Form/Form";
import "../BooksList/BooksList.css";
import { useState } from "react";
import BoxBook from "../BoxBook/BoxBook";

export default function BooksList() {
  const [name, setName] = useState("");
  const [books, setBook] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const searchBook = () => {
    const element = document.getElementById('section__two')
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBook(response.items);
      })
      .catch((err) => console(err));
      element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="main">
      <div className="search">
        <div className="search__form">
        <Form
          onSubmit={onSubmit}
          inputValue={name}
          onChange={(e) => setName(e.target.value)}
          onClick={searchBook}
          name={name}
        />
        </div>
        <div className="main__img">
          <img
            src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg"
            alt=""
          />
        </div>
      </div>
      <div id="section__two" className="books__list">
        {books.map((book) => (
          <BoxBook
            save={book}
            key={book.id}
            title={book.volumeInfo.title}
            content={book.volumeInfo.description}
            img={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/100x150"
            }
            buy={book.volumeInfo.infoLink}
          />
        ))}
      </div>
      </nav>
  );
}
