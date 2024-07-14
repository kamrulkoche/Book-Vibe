import SortByDropdown from "./SortByDropdown/SortByDropdown";

const ListedBooks = () => {
  return (
    <div>
      <h2 className="bg-gray-100 text-3xl font-bold py-6 rounded-2xl text-center">
        Book
      </h2>
      <div className="flex justify-center mt-6">
        <SortByDropdown />
      </div>
    </div>
  );
};

export default ListedBooks;
