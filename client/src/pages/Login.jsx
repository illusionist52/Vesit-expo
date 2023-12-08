// import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "./../../src/index.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(data) {
    const data_recieved = await dispatch(login(data));
    console.log(data_recieved);
    if (data_recieved.message === "success") {
      navigate("/");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center md:flex-row-reverse md:justify-center md:gap-x-8">
      <img
        className="absolute top-0 left-0 md:hidden"
        src="./../src/assets/TORCH.png"
        alt="TORCH"
      />
      <div className="hidden absolute bottom-0 -left-4 -z-30 h-[300px] md:z-30 md:relative md:mb-[100px]">
        {/* <img src="../../src/assets/Login.png" alt="SINGUP" className="w-full" /> */}
        <img
          src="../../src/assets/Grp_Study.png"
          alt="SINGUP"
          className="w-full"
        />
      </div>
      <div className="bg-brown-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-8 mb-20 md:mb-0">
        <h2 className="text-5xl text-center font-semibold mb-4 md:text-light_purple">
          LOGIN
        </h2>
        <form
          className="flex flex-col z-20 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div style={{ position: "relative" }} className="input-wrapper">
            <input
              type="email"
              id="email"
              className="input"
              autoComplete="off"
              placeholder="Email"
              {...register("email")}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div style={{ position: "relative" }} className="input-wrapper">
            <input
              type="password"
              id="password"
              className="input"
              autoComplete="off"
              placeholder="Password"
              {...register("password")}
            />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>
          <div className="mx-auto text-lg">
            <button
              className="px-5 py-2 rounded-xl border-2 border-[10px_10p_10px_10px_light_purple] bg-light_blue text-gray font-semibold hover:shadow-lg transition ease-in-out delay-[200] hover:shadow-light_purple"
              type="submit"
            >
              Login
            </button>
          </div>
          <span className="-mt-7 mx-auto text-lg text-slate-100">
            Don't have an Account?{" "}
            <Link className="text-light_purple underline" to={"/signup"}>
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
