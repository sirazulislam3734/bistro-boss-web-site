import React from "react";
import { GiForkKnifeSpoon, GiShoppingCart, GiWallet } from "react-icons/gi";
import { MdOutlineContactPhone, MdReviews } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaTableCellsRowLock, FaCalendarDays } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: Get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="container mx-auto">
      <div className="flex ">
        {/**Dashboard side bar */}
        <div className="w-64 min-h-screen p-4 bg-yellow-500">
          <ul className="space-y-2 menu font-semibold">
            {
              isAdmin 
              ?<>
              <li className="">
              <NavLink to="/dashboard/adminHome">
                <FaHome size={18} /> ADMIN HOME
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/addItems">
                <GiForkKnifeSpoon size={15} /> ADD ITEMS
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/manageItems">
                <TfiMenuAlt size={20} /> MANAGE ITEMS
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/ManageBookings">
                <BiSolidFoodMenu size={20} /> MANAGE BOOKINGS
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/allUsers">
                <HiUserGroup size={20} /> ALL USERS
              </NavLink>
            </li>
              </>
              :<>
              <li className="">
              <NavLink to="/dashboard/userHome">
                <FaHome size={18} /> USER HOME
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/reservation">
                <FaCalendarDays size={15} /> RESERVATION
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/paymentHistory">
                <GiWallet size={20} /> PAYMENT HISTORY
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/card">
                <GiShoppingCart size={20} /> MY CARD
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/addReview">
                <MdReviews size={20} /> ADD REVIEW
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/myBooking">
                <FaTableCellsRowLock size={20} /> MY BOOKING
              </NavLink>
            </li>
              </>
            }
            <div className="divider"></div>

            <li>
              <NavLink to="/"><FaHome size={18} /> Home</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs"><MdOutlineContactPhone /> CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/ourMenu"><CiMenuFries /> OUR MENU</NavLink>
            </li>
            <li>
              <NavLink to="/ourShop"><GiShoppingCart size={20} /> OUR SHOP</NavLink>
            </li>
          </ul>
        </div>
        {/**Dashboard Content */}
        <div className="flex-1 p-16 bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
