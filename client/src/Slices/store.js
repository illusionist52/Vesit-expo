import { reducer as userReducer } from "./userSlice";
import { loadState, saveState } from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as profileReducer} from "./profileSlice"
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer
  },
  preloadedState:loadState()
})

store.subscribe(()=>{
  saveState(store.getState())
})


export default store;