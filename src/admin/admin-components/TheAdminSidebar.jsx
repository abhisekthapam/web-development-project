import React from "react";
import "./TheAdminSidebar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { LuBus, LuContact } from "react-icons/lu";
import { PiChartLineUpBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

function TheAdminSidebar() {
  return (
    <div className="relative text-xs">
      <div className="sticky top-0 z-10">
        <nav>
          <div className="h-[10vh] flex justify-center items-center">
            <Link to="/">Trendy</Link>
          </div>
          <ul className="flex flex-col gap-3 p-7">
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-dashboard"
              >
                <AiOutlineHome className="text-xl -mt-1" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-analytics"
              >
                <MdOutlineAnalytics className="text-xl -mt-1" />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-payments"
              >
                <TfiWallet className="text-xl -mt-1" />
                Payments
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-products"
              >
                <HiOutlineCube className="text-xl -mt-1" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-orders"
              >
                <LuBus className="text-xl -mt-1" />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-enquiry"
              >
                <LuContact className="text-xl -mt-1" />
                Enquiry
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-marketing"
              >
                <PiChartLineUpBold className="text-xl -mt-1" />
                Marketing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-1 px-3 p-2 rounded-md"
                to="/admin-setting"
              >
                <IoSettingsOutline className="text-xl -mt-1" />
                Setting
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="border-t border-gray-200 p-7 ">
          <NavLink
            className="flex items-center gap-1 px-3 p-2 rounded-md"
            to="/admin-logout"
          >
            <TbLogout2 className="text-xl -mt-1" />
            Logout
          </NavLink>
        </div>
      </div>{" "}
    </div>
  );
}

export default TheAdminSidebar;
