import { useState } from "react";
import { useBooks } from "../../store/useBooks";
import Wishlist from "../WishList/Wishlist";
import "../BoxBook/BoxBook.css";

export default function BoxBook(props) {
  const chekBoks = useBooks((state) => state.chekBoks);
  const editBooks = useBooks((state) => state.editBooks);
  const [heart, setHeart] = useState(chekBoks(props.save));

  const heartButton = (books) => {
    editBooks(books);
    setHeart(!heart);
  };

  return (
    <div className="main__box">
      <Wishlist heart={heart} heartButton={() => heartButton(props.save)} />
      <div className="boxBook">
        <h2 className="box__title">{props.title}</h2>
        <img className="img__book" src={props.img} alt="" />
        <p className="content__text">{props.content}</p>
      </div>
      <div className="buy">
        <a href={props.buy}>BUY</a>
      </div>
    </div>
  );
}
