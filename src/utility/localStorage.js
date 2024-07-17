const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-book");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (id) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBooks.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
  }
};

const getStoredWishlistBook = () => {
  const storedWishlistBook = localStorage.getItem("wishlist-book");
  if (storedWishlistBook) {
    return JSON.parse(storedWishlistBook);
  }
  return [];
};

const saveWishlistBook = (id) => {
  const storedWishlistBooks = getStoredWishlistBook();
  const exists = storedWishlistBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedWishlistBooks.push(id);
    localStorage.setItem("wishlist-book", JSON.stringify(storedWishlistBooks));
  }
};

export { getStoredReadBook, getStoredWishlistBook, saveReadBook, saveWishlistBook };

