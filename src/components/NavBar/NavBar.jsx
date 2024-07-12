import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="flex justify-between lg:items-center ">
      <div className="w-1/2">
        <h2 className="text-black text-3xl font-bold">Book Vibe</h2>
      </div>
      <div className="grid lg:flex justify-end lg:justify-between w-full items-center ">
        <div>
          <nav className="grid lg:flex gap-3 lg:gap-4 text-black text-xl items-center duration-500">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed_books">Listed Books</NavLink>
            <NavLink to="/read_pages">Pages to Read</NavLink>
          </nav>
        </div>
        <div>
          <ul className="grid lg:flex gap-3 lg:gap-8 text-white text-lg font-medium mt-3 lg:mt-0">
            <li>
              <button className="bg-[#23BE0A] hover:bg-white hover:text-black duration-500 px-5 py-3 rounded-lg border border-[#23BE0A] ">
                Sign In
              </button>
            </li>
            <li>
              <button className="bg-[#59C6D2] hover:bg-white hover:text-black duration-500 px-5 py-3 rounded-lg border border-[#59C6D2] ">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
