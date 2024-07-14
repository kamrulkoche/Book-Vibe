import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const SortByDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-500 text-white font-medium text-xl rounded-md gap-4"
      >
        {selected}
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className="text-2xl" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => handleOptionClick("All")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              All
            </button>
            <button
              onClick={() => handleOptionClick("Read Books")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Read Books
            </button>
            <button
              onClick={() => handleOptionClick("Wishlist Books")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Wishlist Books
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;
