// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Users/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
function Navbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function Navigator(to) {
    navigate(to);
  }

  return (
    <nav className="sm:text-xs sm:w-screen p-8 md:mx-auto md:rounded-3xl md:my-5 flex justify-between items-center h-20 md:text-2xl max-w-[70rem] text-lavender font-bold bg-slate-200">
      <NavLink to="/">
        {" "}
        <img className="w-[80px]" src="./../../img-1.jpg" />
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
      {!user.name && (
        <div className="flex gap-2">
          <Button
            onClick={() => {
              navigate("signup");
            }}
            style={"tertiary"}
          >
            Signup
          </Button>
          <Button to={"login"}>Login</Button>
        </div>
      )}
      {user.name && (
        <div className="flex gap-3 justify-center items-center">
          <img src={user.avatar} className="w-[50px]" />
          <h2 className="text-lavender font-bold text-xl">{user.name}</h2>
          <Button
            style={"custom"}
            onClick={() => {
              dispatch(logout());
              toast.success("Logged out")
            }}
            color={"lavender"}
            hover={"dark_purple"}
            active={"light_purple"}
            text={"slate-200"}
            className={"hidden md:block"}
          >
            Log out
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
