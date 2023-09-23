import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.css";

export default function Header() {
  return (
    <header className="header__main">
      <div className="header__content">
        <Link className="search__link" to="/">
          Serch
        </Link>
        <Link className="wish__list" to="/wishList">
          <AiOutlineHeart />
          WishList
        </Link>
      </div>
    </header>
  );
}
