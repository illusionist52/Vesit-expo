import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

function HamNav({ toggleHamburger, setToggleHamburger }) {
  const navigate = useNavigate();

  if (toggleHamburger)
    return (
      <div className={`w-full absolute z-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 text-slate-200 transition-all duration-1000  ${toggleHamburger ? "-translate-y-" : "-translate-y-full"}`}>
        <ul className="flex flex-col items-center my-5 gap-5 h-[100%] w-[100%]">
          <li className="">
            <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-[100vh]"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false)
              }}
            >
              Experiences
            </Button>
          </li>
          <li className="">
          <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-[100vh]"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false)
              }}
            >
              Forums
            </Button>
          </li>
          <li className=" ">
          <Button
              style={"custom"}
              className={"border-none text-xl font-bold py-3 px-[100vh]"}
              active={"lavender"}
              onClick={() => {
                navigate("experiences");
                setToggleHamburger(false)
              }}
            >
              Companies
            </Button>
          </li>
        </ul>
      </div>
    );
}

export default HamNav;
