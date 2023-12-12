import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  avatar: {},
  portfolioWebsite: "",
  branch: "",
  collegeStartYear: null,
  shortBio: "",
  longDesc: "",
  projects: [],
  skills: [],
  workHistory: [],
  achievements: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    createProfile(state, action) {
      state.avatar = action.payload.avatar;
      state.portfolioWebsite = action.payload.portfolioWebsite;
      state.branch = action.payload.branch;
      state.collegeStartYear = action.payload.collegeStartYear;
      state.shortBio = action.payload.shortBio;
      state.longDesc = action.payload.longDesc;
      state.projects = action.payload.projects;
      state.skills = action.payload.skills;
      state.achievements = action.payload.achievements;
    },
  },
});

export function createProfile(data, stateData, id, token) {
  return async function (dispatch, getState) {
    try {
      let filename,
        originalname,
        avatar = "";

      const res = await fetch(
        `http://localhost:3002/api/v1/users/createProfile/${id}`,
        {
          method: "PATCH",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data2 = await res.json();

      if (data2) {
        ({ filename, originalname } = data2.files);
        avatar = filename + "." + originalname.split(".")[1];
      }

      stateData = { ...stateData, avatar };
      toast.success("profile created successfully");
      dispatch({ type: "profile/createProfile", payload: stateData });
      return data2;
    } catch {
      throw new Error("something went wrong");
    }
  };
}
export const { reducer } = profileSlice;
export const selectProfile = (state) => state.profile;
