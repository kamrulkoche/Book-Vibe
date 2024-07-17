const ListedBookCard = ({ book }) => {
  const { image, title, author, category1, year, pages, Publisher, Rating } =
    book;
  return (
    <div className="flex items-center border p-5 rounded-3xl">
      <div className="bg-slate-100 p-5 rounded-3xl mr-10">
        <img src={image} alt="" className="h-60" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base font-medium mt-4">By : {author}</p>
        <div className="flex items-center mt-4">
          <p className="flex items-center">
            <span className="text-base font-bold"> Tag</span>
            <span>
              <h2 className="text-[#23BE0A] bg-[#e3f0e1] px-6 py-2 rounded-3xl mx-8">
                {book.category1}
              </h2>
            </span>
            <span>
              <h2 className="text-[#23BE0A] bg-[#e3f0e1] px-6 py-2 rounded-3xl">
                {book.category2}
              </h2>
            </span>
          </p>
          <p className="text-base ml-8">Year of Publishing: {year}</p>
        </div>
        <div className="flex gap-10 my-6">
          <h2>Publisher: {Publisher}</h2>
          <p>page {pages}</p>
        </div>
        <hr />
        <div className="mt-4 flex gap-5 items-center">
          <h2 className="text-[#328EFF] bg-[#c1d6f0] px-6 py-2 rounded-3xl ">
            Category: {category1}
          </h2>
          <h2 className="text-[#FFAC33] bg-[#6d6254] px-6 py-2 rounded-3xl ">
            Rating: {Rating}
          </h2>
          <button className="text-lg font-medium text-white bg-[#23BE0A] rounded-3xl px-5 py-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
