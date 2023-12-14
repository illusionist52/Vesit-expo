import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Slices/userSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { navVariants } from "../styles/motion";
function HamNav({ toggleHamburger, setToggleHamburger }) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  if (toggleHamburger)
    return (
      <motion.div
        
        initial="hidden"
        whileInView="show"

        className={`w-[100%] fixed top-20 z-50 rounded-b-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-br border-gray-100 text-slate-200 md:hidden`}
      >
        <ul className="flex flex-col items-center my-5 gap-5 h-[100%] w-[100%]">
          <li className="">
            <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-10"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false);
              }}
            >
              Experiences
            </Button>
          </li>
          <li className="">
            <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-10"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false);
              }}
            >
              Forums
            </Button>
          </li>
          <li className=" ">
            <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-10"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false);
              }}
            >
              Companies
            </Button>
          </li>
          {user.name && (
            <li className=" ">
              <Button
                style={"custom"}
                className={"border-none text-xl font-bold py-2 px-4"}
                active={"light_purple"}
                hover={"dark_purple"}
                color={"lavender"}
                text={"slate-200"}
                onClick={() => {
                  dispatch(logout());
                  setToggleHamburger(false);
                  toast.success("logged out");
                }}
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </motion.div>
    );
}

export default HamNav;
