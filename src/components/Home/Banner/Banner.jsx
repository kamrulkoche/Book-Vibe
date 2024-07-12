const Banner = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] px-32 py-32 rounded-3xl ju ">
        <div className="grid lg:grid-cols-2 items-center ">
          <div className="mb-20 lg:mb-0 mr-0 lg:mr-10">
            <h2 className="text-5xl font-bold leading-relaxed mb-16">
              Books to freshen up your bookshelf
            </h2>
            <button className="bg-[#23BE0A] text-white text-xl font-bold hover:bg-white hover:text-black duration-500 px-5 py-3 rounded-lg border border-[#23BE0A] ">
              View The List
            </button>
          </div>
          <div className="justify-center flex">
            <img src="/src/assets/images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
