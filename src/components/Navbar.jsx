import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Img from "../assets/images2.jpeg";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AuthContext } from "../provider/AuthProvider";
import useCard from "../hooks/useCard";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const [card] = useCard();
  const { user, signOutUser } = useContext(AuthContext);
  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">CONTACT US</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="dashboard/adminHome">SECRET</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="dashboard/userHome">SECRET</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/ourMenu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop">OUR SHOP</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/card">
          <button className="lg:flex item-center gap-2">
            <GiShoppingCart size={20} />
            <div className="badge badge-secondary">+{card.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "User Log out successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div className="navbar fixed bg-opacity-30 z-10 mx-auto text-white bg-black container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">bistro-boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <button>
                    <img
                      className="w-10 h-10 border rounded-full object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </button>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu z-[1] md:w-96 p-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
                >
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                      className="object-cover object-top w-full"
                      src={Img}
                      alt="Mountain"
                    />
                  </div>
                  <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-32"
                      src={user.photoURL}
                      alt="Woman looking front"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="font-semibold md:text-2xl text-sm">
                      Name: {user.displayName}
                    </h2>
                    <p className="text-gray-500 md:text-lg text-sm">
                      Email: {user.email}
                    </p>
                  </div>
                  <div className="lg:p-4 md:p-2 p-1 md:mx-8 mt-2">
                    <button
                      onClick={handleSignOut}
                      className="w-full block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                    >
                      SIGN OUT
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link to="signin">
              <button className="lg:px-6 md:px-4 px-2 font-bold md:py-3 text-white md:text-lg hover:bg-white hover:text-sky-700 tran hover:rounded-xl flex items-center gap-2">
                SIGN IN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
