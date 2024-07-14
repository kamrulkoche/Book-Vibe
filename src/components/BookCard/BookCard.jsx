import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { id, title, author, genre, price, category1, category2, image } = book;
  //   console.log(title);

  return (
    <div>
      <Link to={`/book/${id}`}>
        <button>
          <div className="border border-gray-200 rounded-xl  lg:w-96 px-8 py-6 mb-10">
            <div className=" justify-center flex bg-[#F3F3F3] py-8  rounded-2xl">
              <div className="w-32 ">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-44 object-cover rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-500 font-semibold">{category1}</span>
              <span className="text-green-500 font-semibold ml-6 mt-1">
                {category2}
              </span>
              <h3 className="text-xl font-bold mt-2">{title}</h3>
              <p className="text-gray-600 mt-2">By: {author}</p>
              <div className="flex justify-between mt-6">
                <p className="text-gray-600">{genre}</p>
                <p className="text-black font-bold flex items-center">
                  {price}{" "}
                  <span className="ml-4 text-lg">
                    <IoIosStarOutline />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
