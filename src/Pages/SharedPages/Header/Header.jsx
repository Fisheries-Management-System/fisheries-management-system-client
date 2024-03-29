import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XIcon, MenuIcon } from "@heroicons/react/solid";

const Header = ({ user, setUser, reload }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("employee");
    setUser(null);
  };

  return (
    <>
      <div className=" py-2 md:py-4 bg-gray-800 shadow-xl text-white z-10">
        <div className="container px-4  lg:px-4  mx-auto lg:flex lg:items-center">
          <div className="flex justify-between items-center ">
            <Link to="/" className="font-bold text-xl text-white">
              Fisheries Management System
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-6 md:w-10 transition delay-75 text-white lg:hidden"
              id="navbar-toggle"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <nav
            className={`flex gap-6 md:ml-auto  justify-between lg:justify-end items-center absolute w-full lg:static flex-col lg:flex-row transition delay-200 ease-in-out  z-10 bg-gray-800 ${
              menuOpen ? "top-[44px] left-0 w-full pb-5" : "top-[-500px]"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-yellow-500"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-yellow-500"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              About Us
            </NavLink>
           <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-yellow-500"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-yellow-500"
                  : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
              }
            >
              FAQs
            </NavLink>

            {user ? (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 bg-yellow-500"
                    : "p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-500 "
                }
              >
                Dashboard
              </NavLink>
            ) : (
              ""
            )}

            {user ? (
              <div className="relative antialiased -order-1 lg:order-1">
                <div className=" group cursor-pointer relative ">
                  {user.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt="profile"
                    />
                  ) : (
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                      alt="profile"
                    />
                  )}

                  <div className="absolute   hidden right-0 top-0 mt-10 bg-white rounded-md shadow-lg  lg:group-hover:block hover:block">
                    <div>
                      <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                        <span className="text-gray-800">
                          {user.employeeName ? user.employeeName : "My Profile"}
                        </span>
                        <span className="text-sm text-gray-400">
                          {user.email ? user.email : "dealer@example.com"}
                        </span>
                      </div>
                      <ul className="flex flex-col p-2 my-2 space-y-1">
                        <li>
                          <Link
                            to="/dashboard"
                            className="block px-2 py-1 text-teal-600  transition rounded-md hover:bg-gray-100"
                          >
                            Dashboard Home
                          </Link>
                        </li>
                      </ul>
                      <div className="flex items-center text-xl justify-center p-4 text-blue-600 underline border-t">
                        <span onClick={handleSignOut}>Logout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="lg:hidden p-2 lg:px-4 md:mx-2 text-teal-600 text-center border border-solid border-teal-500 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1 hover:bg-teal-500  hover:text-white"
              >
                Sign Out
              </button>
            ) : (
              <div className="font-semibold">
                <NavLink
                  to="/admin-login"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 lg:px-4 md:mx-2 text-white bg-teal-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-teal-600 transition-colors duration-300"
                      : "p-2 lg:px-4 md:mx-2 text-teal-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-teal-600 transition-colors duration-300 "
                  }
                >
                  Admin Login
                </NavLink>
                <NavLink
                  to="/employee-login"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 lg:px-4 md:mx-2  text-center border border-solid border-teal-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1 bg-teal-600 text-white"
                      : "p-2 lg:px-4 md:mx-2 text-teal-600 text-center border border-solid border-teal-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  }
                >
                  Employee Login
                </NavLink>
                <NavLink
                  to="/user-login"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 lg:px-4 md:mx-2  text-center border border-solid border-teal-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1 bg-teal-600 text-white"
                      : "p-2 lg:px-4 md:mx-2 text-teal-600 text-center border border-solid border-teal-600 rounded  transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  }
                >
                  User Login
                </NavLink>
              </div>
            )}
          </nav>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
