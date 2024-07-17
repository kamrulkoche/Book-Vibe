import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const SortByDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange(option);
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
              onClick={() => handleOptionClick("Sort By")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Sort By
            </button>
            <button
              onClick={() => handleOptionClick("Rating")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Rating
            </button>
            <button
              onClick={() => handleOptionClick("Number of Pages")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Number of Pages
            </button>
            <button
              onClick={() => handleOptionClick("Published Year")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Published Year
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;
