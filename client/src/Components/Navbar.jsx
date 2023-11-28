import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  const navigate = useNavigate();

  function Navigator(to) {
    navigate(to);
  }
  return (
    <nav className=" sm:text-xs sm:w-screen p-8 md:mx-auto md:rounded-3xl md:my-5 flex justify-between items-center h-20 md:text-2xl max-w-[70rem] text-lavender font-bold bg-slate-200">
      <NavLink to="/">
        {" "}
        <img className="w-[80px]" src="./../../public/img-1.jpg" />
      </NavLink>
      <ul className="flex md:items-center md:h-5 gap-7 justify-around">
        <li>
          <NavLink
            className="hover:bg-light_purple hover:text-slate-200 px-2 py-2 rounded-xl focus:text-dark_purple focus:underline focus:underline-offset-8 active:bg-dark_purple active:text-slate-200 visited:underline focus:decoration-dark_purple md:flex hidden "
            to="experiences"
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-light_purple hover:text-slate-200 px-2 py-2 rounded-xl focus:text-dark_purple focus:underline focus:underline-offset-8 active:bg-dark_purple active:text-slate-200 visited:underline focus:decoration-dark_purple md:flex hidden"
            to="forums"
          >
            Forums
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:bg-light_purple hover:text-slate-200 px-2 py-2 rounded-xl focus:text-dark_purple focus:underline focus:underline-offset-8 active:bg-dark_purple active:text-slate-200 visited:underline focus:decoration-dark_purple md:flex hidden"
            to="companies"
          >
            Companies
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <Button to={"signup"} style={"secondary"}>
          Signup
        </Button>
        <Button to={"login"}>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
