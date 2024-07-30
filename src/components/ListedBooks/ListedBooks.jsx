import { useEffect, useState } from "react";
import {
  getStoredReadBook,
  getStoredWishlistBook,
} from "../../utility/localStorage";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import SortByDropdown from "./SortByDropdown/SortByDropdown";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [storedBooksCount, setStoredBooksCount] = useState([]);
  const [wishlistBooksCount, setWishlistBooksCount] = useState([]);
  const [sortOption, setSortOption] = useState("Sort By");
  const [activeTab, setActiveTab] = useState("Read Books");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    const storedWishlistBookIds = getStoredWishlistBook();
    if (books.length > 0) {
      setStoredBooksCount(storedBookIds);
      setWishlistBooksCount(storedWishlistBookIds);
    }
  }, [books]);

  const readBooks = books.filter((book) => storedBooksCount.includes(book.id));
  const wishlistBooks = books.filter((book) =>
    wishlistBooksCount.includes(book.id)
  );

  const sortBooks = (books, option) => {
    switch (option) {
      case "Rating":
        return [...books].sort((a, b) => a.Rating - b.Rating);
      case "Number of Pages":
        return [...books].sort((a, b) => a.pages - b.pages);
      case "Published Year":
        return [...books].sort((a, b) => a.year - b.year);
      default:
        return books;
    }
  };

  const sortedReadBooks = sortBooks(readBooks, sortOption);
  const sortedWishlistBooks = sortBooks(wishlistBooks, sortOption);

  return (
    <div>
      <Helmet>
        <title>listed_books </title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>
      <h2 className="bg-gray-100 text-3xl font-bold py-6 rounded-2xl text-center">
        Books
      </h2>
      <div className="flex justify-center mt-6">
        <SortByDropdown onSortChange={setSortOption} />
      </div>
      <div className="flex justify-start mt-6 border-b ">
        <button
          className={`px-4 py-2 ${
            activeTab === "Read Books"
              ? "font-bold text-white bg-green-500"
              : "text-black"
          }`}
          onClick={() => setActiveTab("Read Books")}
        >
          Read Books
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "Wishlist Books"
              ? "font-bold text-white bg-green-500"
              : "text-black"
          }`}
          onClick={() => setActiveTab("Wishlist Books")}
        >
          Wishlist Books
        </button>
      </div>
      <div className="grid mt-6">
        <div className="grid gap-10">
          {activeTab === "Read Books" &&
            sortedReadBooks.map((book) => (
              <ListedBookCard key={book.id} book={book} />
            ))}
          {activeTab === "Wishlist Books" &&
            sortedWishlistBooks.map((book) => (
              <ListedBookCard key={book.id} book={book} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
