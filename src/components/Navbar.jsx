import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="h-10 w-16 rounded-md shadow-xl p-1 bg-transparent
         flex justify-center items-center font-semibold text-2xl"
      >
        {/* //////////////////////////////////// */}
        <p className=" bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
          ABD
        </p>
        {/* //////////////////////////////////// */}
      </NavLink>
      <nav className="flex h-10 text-xl gap-8 font-medium items-center">
        <NavLink
          to="/a"
          className={({ isActive }) =>
            isActive ? "text-emerald-600" : "text-slate-900"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/cc"
          className={({ isActive }) =>
            isActive ? "text-emerald-600" : "text-slate-900"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
