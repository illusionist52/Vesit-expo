// import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../Users/userSlice";
import { useDispatch } from "react-redux";
// import createUser from "../services/apiUsers";
import { Link } from "react-router-dom";
// import Button from "../Components/Button";

function Signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  return (
    <div className="h-screen flex items-center justify-center md:flex-row-reverse md:justify-center md:gap-x-8">
      <img
        className="absolute top-0 left-0 h-[250px] md:h-96 md:left-10 md:-top-10 md:-rotate-12"
        src="./../src/assets/TORCH.png"
        alt="TORCH"
      />
      <div className="bg-brown-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-8 md:mb-0">
        <h2 className="text-5xl text-center font-semibold mb-4 md:text-cyan">
          SIGNUP
        </h2>
        <form
          className="flex flex-col z-20 gap-8"
          onSubmit={handleSubmit((data) => {
            dispatch(signup(data));
          })}
        >
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              className="input md:w-96"
              autoComplete="off"
              placeholder="Name"
              {...register("email")}
            />
            <label htmlFor="name" className="label">
              Name
            </label>
          </div>

          {/* EMAIL INPUT */}
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              className="input md:w-96"
              autoComplete="off"
              placeholder="Email"
              {...register("email")}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>

          {/* PASSWORK INPUT */}
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              className="input md:w-96"
              autoComplete="off"
              placeholder="Password"
              {...register("email")}
            />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              id="confirmPassword"
              className="input md:w-96"
              autoComplete="off"
              placeholder="Confirm Password"
              {...register("email")}
            />
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
          </div>
          <div className="mx-auto text-lg">
            {/* <Button type="submit">SignUp</Button> */}
            <button
              className="px-5 py-2 rounded-xl border-2 border-[10px_10p_10px_10px_cyan] bg-light_blue text-gray font-semibold hover:shadow-lg transition ease-in-out delay-[200] hover:shadow-cyan"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <span className="-mt-7 mx-auto text-lg text-slate-100">
            Already have an Account?{" "}
            <Link className="text-cyan underline" to={"/login"}>
              Login
            </Link>
          </span>
        </form>
      </div>
      <div className="hidden absolute bottom-0 -left-4 -z-30 h-[300px] md:z-30 md:relative md:mb-[100px] md:block">
        {/* <img src="../../src/assets/Login.png" alt="SINGUP" className="w-full" /> */}
        <img
          src="../../src/assets/Grp_Study.png"
          alt="SINGUP"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Signup;
