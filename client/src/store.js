import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store;
