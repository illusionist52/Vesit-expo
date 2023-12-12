import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
const initialState = {
  avatar: null,
  portfolioWebsite: "",
  branch: "",
  collegeStartYear:null,
  shortBio: "",
  longDesc: "",
  projects: [],
  skills: [],
  workHistory: [],
  achievements: []
}

const profileSlice = createSlice({
  name:"profile",
  initialState,
  reducers:{
    createProfile(state,action){
      state.avatar=action.payload.avatar;
      state.portfolioWebsite=action.payload.portfolioWebsite;
      state.branch=action.payload.branch;
      state.collegeStartYear=action.payload.collegeStartYear;
      state.shortBio=action.payload.shortBio;
      state.longDesc=action.payload.longDesc;
      state.projects=action.payload.projects;
      state.skills=action.payload.skills;
      state.achievements=action.payload.achievements;
    }
  }
})

export function createProfile(data,id,token){
  return async function (dispatch,getState){
    try{
      const res = await fetch(`http://localhost:3002/api/v1/users/createProfile/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `Bearer ${token}`
        
      }})
      const data2 = await res.json()
      console.log(data2)
      console.log(data)
      toast.success("profile created successfully")
      dispatch({type:"profile/createProfile" , payload:data})
      return data2;
    }
    catch {
      throw new Error("something went wrong")
    }

  }

}
export const { reducer } = profileSlice;
export const selectProfile = (state) => state.profile