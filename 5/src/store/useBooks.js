import { create } from "zustand";

export const useBooks = create((set, get) => ({
  books: JSON.parse(localStorage.getItem("SaveBook")) || [],
  chekBoks: (book) => {
    const currentBooks = get().books;
    const hasWishListABook = currentBooks.find((el) => el.id === book.id);
    if (hasWishListABook) {
      return true;
    }
    return false;
  },
  editBooks: (index) =>
    set((state) => {
      const newBooks = state.books.find((el) => el.id === index.id);
      if (newBooks) {
        const newLocal = state.books.filter((book) => {
          return book.id !== index.id;
        });
        localStorage.setItem("SaveBook", JSON.stringify(newLocal));
        return { books: JSON.parse(localStorage.getItem("SaveBook")) };
      }
      const addBooks = [...state.books, index];
      //   state.books.push(index);
      localStorage.setItem("SaveBook", JSON.stringify(addBooks));
      return { books: JSON.parse(localStorage.getItem("SaveBook")) };
    }),
}));
