import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredReadBook,
  saveReadBook,
  getStoredWishlistBook,
  saveWishlistBook,
} from "../../utility/localStorage";

const BooksAdded = () => {
  const [triggerEffect, setTriggerEffect] = useState(false);

  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const readBook = () => {
    const storedBookIds = getStoredReadBook();

    if (!storedBookIds.includes(idInt)) {
      saveReadBook(idInt);
      toast.success("Added to Read List");
    } else {
      toast.warning("Already in Read List");
    }
    setTriggerEffect(!triggerEffect);
  };

  const wishlistBook = () => {
    const storedWishlistBooks = getStoredWishlistBook();
    const storedBookIds = getStoredReadBook();

    if (storedBookIds.includes(idInt)) {
      toast.warning("Book is already in Read List. Cannot add to Wishlist.");
      return;
    }

    if (!storedWishlistBooks.includes(idInt)) {
      saveWishlistBook(idInt);
      toast.success("Added to Wishlist");
    } else {
      toast.warning("Already in Wishlist");
    }
    setTriggerEffect(!triggerEffect);
  };

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    const storedWishlistBookIds = getStoredWishlistBook();
    if (books.length > 0) {
      const addReadBook = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          addReadBook.push(book);
        }
      }

      const addWishlistBook = [];
      for (const id of storedWishlistBookIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          addWishlistBook.push(book);
        }
      }
    }
  }, [books, triggerEffect]);

  return (
    <div className="flex">
      <button
        className="border border-gray-400 text-lg font-bold px-8 py-3 rounded-xl"
        onClick={readBook}
      >
        Read
      </button>
      <button
        className="border text-white bg-[#50B1C9] border-[#50B1C9] text-lg font-bold px-8 py-3 rounded-xl ml-5"
        onClick={wishlistBook}
      >
        Wishlist
      </button>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default BooksAdded;
