import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import useNavbar from "../Hooks/useNavbar";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  const currentPath = window.location.pathname;

  const { NavbarItems, searchRef, handleSearch } = useNavbar();

  const navigate = useNavigate();

  return (
    <header className="py-2 px-10 gap-5 relative md:justify-end  min-h-10 w-full flex flex-col md:flex-row justify-around items-center bg-white">
      <div className="md:absolute md:left-14 font-bold w-full  md:w-auto  px-3 md:px-0 flex justify-between items-center text-xl md:text-2xl">
        <Link to="/">NEWS APP</Link>

        <span
          className={`md:hidden w-8 cursor-pointer relative rounded p-1 ${
            showMobileMenu && "bg-gray-300"
          }`}
          onClick={handleToggleMenu}
        >
          <AiOutlineMenu />
        </span>
      </div>

      <ul
        className={`${
          showMobileMenu ? "h-12 overflow-visible" : "h-0 overflow-hidden"
        } md:ml-14 md:h-auto  md:overflow-visible transition-all ease-in-out duration-150 flex px-2 md:px-0 gap-5 text-sm md:text-md text-center items-center justify-center`}
      >
        {NavbarItems.map((item, index) => {
          if (item?.availableIn.includes(currentPath))
            return (
              <li
                key={`items-${index}`}
                className="group z-50 relative cursor-pointer hover:bg-gray-200 p-2 md:p-3 "
              >
                <p
                  onClick={() => {
                    if (item?.path) navigate(item?.path);
                  }}
                  className={`${
                    currentPath === item?.path && "font-bold scale-110"
                  } flex gap-1  items-center`}
                >
                  {item?.title}{" "}
                  {item?.children?.length > 0 && <FaChevronDown />}
                </p>
                {item?.children?.length > 0 && (
                  <ul className="opacity-0 -translate-y-3 absolute pointer-events-none whitespace-nowrap rounded-sm left-0 top-full transition-all ease-in-out duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto bg-white shadow-md">
                    {item?.children?.map((child, childIndex) => (
                      <li
                        onClick={child?.fn}
                        key={childIndex}
                        className="cursor-pointer p-3 hover:bg-neutral-700 hover:text-white "
                      >
                        {child?.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
        })}
      </ul>
      {currentPath === "/" && (
        <form className="w-full md:w-2/6" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiMagnifyingGlass />
            </div>
            <input
              ref={searchRef}
              type="search"
              id="default-search"
              className=" w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 "
              placeholder="Search News"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-1 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1  "
            >
              Search
            </button>
          </div>
        </form>
      )}
    </header>
  );
};

export default Navbar;
