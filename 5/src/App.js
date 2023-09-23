import "./App.css";
import BooksList from "./components/BooksList/BooksList";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import WishListBox from "./components/WishList/WishListBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/wishList" element={<WishListBox/>}/>
      </Routes>
    </div>
  );
}

export default App;
