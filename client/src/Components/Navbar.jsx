// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Users/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { navVariants } from "../styles/motion";
import { ImCross } from "react-icons/im";
import "../index.css";
function Navbar({ setToggleHamburger, toggleHamburger }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function Navigator(to) {
    navigate(to);
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="text-xs w-screen py-8 px-2 justify-evenly md:mx-auto md:rounded-3xl md:my-5 flex md:justify-between items-center h-20 md:text-2xl max-w-[70rem] text-lavender font-bold bg-slate-200"
    >
      <NavLink to="/">
        {" "}
        <img className="w-[200px]" src="./../../LOGO.png" />
      </NavLink>
      <ul className="flex md:items-center md:h-5 gap-7 justify-around">
        <li>
          <NavLink
            className="px-2 py-2 rounded-xl   focus:text-dark_purple relative before:content-[''] before:w-[100%] before:h-[3px] before:absolute before:left-0 before:bottom-0 before:invisible before:bg-dark_purple before:transition before:ease-in-out before:duration-500 before:scale-x-0 before:delay-300 hover:before:visible hover:before:scale-x-100 md:flex hidden "
            to="experiences"
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-2 py-2 rounded-xl   focus:text-dark_purple relative before:content-[''] before:w-[100%] before:h-[3px] before:absolute before:left-0 before:bottom-0 before:invisible before:bg-dark_purple before:transition before:ease-in-out before:duration-500 before:scale-x-0 before:delay-300 hover:before:visible hover:before:scale-x-100 md:flex hidden "
            to="forums"
          >
            Forums
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-2 py-2 rounded-xl   focus:text-dark_purple relative before:content-[''] before:w-[100%] before:h-[3px] before:absolute before:left-0 before:bottom-0 before:invisible before:bg-dark_purple before:transition before:ease-in-out before:duration-500 before:scale-x-0 before:delay-300 hover:before:visible hover:before:scale-x-100 md:flex hidden "
            to="companies"
          >
            Companies
          </NavLink>
        </li>
      </ul>
      {!user.name && (
        <div className="flex gap-2 -mr-[23px] md:mr-0">
          <Button
            onClick={() => {
              navigate("signup");
            }}
            style={"secondary"}
          >
            Signup
          </Button>
          <Button to={"login"}>Login</Button>
        </div>
      )}

      {user.name && (
        <div className="flex gap-3 justify-center items-center">
          <NavLink to="profile">
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-lavender font-bold text-xl">{user.name}</h2>
              <img src={user.avatar} className="w-[50px]" />
            </div>
          </NavLink>
          <Button
            style={"custom"}
            onClick={() => {
              dispatch(logout());
              toast.success("Logged out");
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
      <div
        className="ml-[30px] md:hidden"
        onClick={() => {
          setToggleHamburger((show) => !show);
        }}
      >
        {toggleHamburger ? (
          <div className="w-[25px] flex justify-center items-center">
            <ImCross size={20} />
          </div>
        ) : (
          <div className="w-[25px] flex justify-center items-center">
            <GiHamburgerMenu size={25} />
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
