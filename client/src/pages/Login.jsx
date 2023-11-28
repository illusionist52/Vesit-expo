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
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(login(data));
          navigate("/");
        })}
      >
        <br /><br /><br />
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
            {...register("email")}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </div>
        <br />

        <Link>Forgot password?</Link>
        <button type="submit">log in</button>
      </form>
    </div>
  );
}

export default Login;
