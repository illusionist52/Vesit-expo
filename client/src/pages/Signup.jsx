import React from "react";
import { useForm } from "react-hook-form";
import { signup, store1 } from "../Users/userSlice";
import { useDispatch } from "react-redux";
import createUser from "../services/apiUsers";

function Signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(signup(data));
          store1.dispatch({type: "signup", payload: data})
          console.log(store1.getState());
        })}
      >
        <label>Name:</label>
        <input type="text" id="name" {...register("name")} />
        <br />
        <label>College email:</label>
        <input type="email" id="email" {...register("email")} />
        <br />
        <label>Password:</label>
        <input type="password" id="password" {...register("password")} />
        <br />
        <label>Confirm password:</label>
        <input
          type="password"
          id="confirmPrassword"
          {...register("confirmPassword")}
        />
        <br />
        <button type="submit">SIgn up</button>
      </form>
    </div>
  );
}

export default Signup;
