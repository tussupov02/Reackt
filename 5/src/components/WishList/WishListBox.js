import { useBooks } from "../../store/useBooks";
import BoxBook from "../BoxBook/BoxBook";

export default function WishListBox() {
  const books = useBooks((state) => state.books);
  return (
    <div className="container">
      <div className="container__title">
        <h2>Wishlist</h2>
        <img
          src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/book.bafa48d3.svg"
          alt=""
        />
        {books.length > 0 ? (
          <p>Your wishlist!</p>
        ) : (
          <p>No wishlist items yet</p>
        )}
      </div>
      <div className="books__list">
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
    </div>
  );
}
