import { useLoaderData, useParams } from "react-router-dom";
// import { banner } from "../../../public/images/banner.png";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  //   console.log(book);
  return (
    <div className="grid md:grid-cols-2 items-center ">
      <div className="flex justify-center mb-16 lg:mb-0 ">
        <img src={book.image} alt="" className="h-96 bg-gray-100 p-20 " />
      </div>
      <div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold">{book.title}</h2>
          <p className="text-xl font-medium mt-2">{book.author}</p>
        </div>
        <hr />
        <p className="text-xl font-medium mt-2 mb-8">{book.genre}</p>
        <hr />
        <div className="mt-4">
          <p className="text-base font-normal leading-7">
            <span className="text-base font-bold">Review: </span>
            {book.review} <br /> {book.review2}
          </p>
        </div>
        <div className="flex gap-5 mt-4 font-medium text-base items-center mb-8">
          <h3>Tag</h3>
          <h2 className="text-[#23BE0A] bg-[#e3f0e1] px-6 py-2 rounded-3xl">
            #{book.category1}
          </h2>
          <h2 className="text-[#23BE0A] bg-[#e3f0e1] px-6 py-2 rounded-3xl">
            #{book.category2}
          </h2>
        </div>

        <div className="-ml-2">
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-lg font-normal">Number of Pages:</td>
                  <td className="text-lg font-semibold">{book.pages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-lg font-normal">Publisher:</td>
                  <td className="text-lg font-semibold">{book.Publisher}</td>
                </tr>
                <tr>
                  <td className="text-lg font-normal">Year of Publishing:</td>
                  <td className="text-lg font-semibold">{book.year}</td>
                </tr>
                <tr>
                  <td className="text-lg font-normal">Rating:</td>
                  <td className="text-lg font-semibold">{book.Rating}</td>
                </tr>
                {/* row 3 */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex">
          <button className="border border-gray-400 text-lg font-bold px-8 py-3 rounded-xl">
            Read
          </button>
          <button className="border text-white bg-[#50B1C9] border-[#50B1C9] text-lg font-bold px-8 py-3 rounded-xl ml-5">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
