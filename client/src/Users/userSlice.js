import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import thunk from "redux-thunk";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function userReducer(state = { email: "" }, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    case "signup":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        confirm_password: action.payload.confirm_password,
      };

    case "logout":
      return { state: initialState };
  }
}

export const store1 = createStore(userReducer, applyMiddleware(thunk));

export function login(data) {
  return { type: "login", payload: data };
}

export function logout() {
  return { type: "logout" };
}

export function signup(data) {
  // return { type: "signup", payload: data };
  return async function (dispatch, getState) {
    try {
      const res = await fetch(`http://localhost:3002/api/v1/users/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json ",
        },
      });

      toast.success("user added successfully");
      console.log(res.json());
      dispatch({ type: "signup", payload: data });
    } catch {
      throw new Error("something went wrong");
    }
  };
}

console.log(store1.getState());

