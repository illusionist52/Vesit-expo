import { applyMiddleware, createSlice, createStore , configureStore} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import thunk from "redux-thunk";
const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
  avatar: "",
  token: "",
};

export function loadState(){
  try {
    const serializedState = localStorage.getItem('authState');
    return serializedState ? JSON.parse(serializedState) : initialState;
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return initialState;
  }
}
export function saveState(state){
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action){
      state.id= action.payload.id;
      state.name= action.payload.name;
      state.email= action.payload.email;
      state.password= action.payload.password;
      state.token= action.payload.token;
      state.avatar= action.payload.avatar
    },
    signup(state, action){
      state.id= action.payload.id;
      state.name= action.payload.name;
      state.email= action.payload.email;
      state.password= action.payload.password;
      state.token= action.payload.token;
      state.avatar= action.payload.avatar
    },
    logout(state){
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.avatar = "";
      state.token = "";
      localStorage.removeItem('authState');
    }
  }
})

export const {logout} = userSlice.actions;

export function login(data) {
    // return { type: "login", payload: data };
    return async function (dispatch, getState){
      let name, email, password, token, id,avatar,shortBio,longDescription,portfolioWebsite,collegeStartYear,branch = ""
      let projects,experience,skills,achievements = []
      const res = await fetch(`http://localhost:3002/api/v1/users/login`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json ",
        },
      });
      
      const login_data_recieved = await res.json();
      if(login_data_recieved.token){
        ( { _id: id, name, avatar ,branch, collegeStartYear,shortBio,longDescription,projects,experience,skills,achievements} = login_data_recieved.data.user);
        token = login_data_recieved.token
        avatar = avatar.split('\\')[1]
        }
        else{
          toast.error(login_data_recieved.message)
        }
        data = {...data,name, token, id, avatar}
        const profileData = {avatar,portfolioWebsite,branch,collegeStartYear,shortBio,longDescription,projects,achievements,experience,skills}
        console.log(login_data_recieved);
        dispatch({type: "user/login", payload: data });
        dispatch({type: "profile/createProfile", payload: profileData})
        return login_data_recieved
    }
  }
  
  
  
  export function signup(data) {
    // return { type: "signup", payload: data };
    return async function (dispatch, getState) {
      
      try {
        let token, id , avatar= ""
        const res = await fetch(`http://localhost:3002/api/v1/users/signup`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json ",
          },
        });
  
        const data1 = await res.json();
        if(data1.token){
        toast.success("Acount created successfully")
        id = data1.data.user._id
        avatar = data1.data.user.avatar;
        token=data1.token
        }
        else{
          toast.error(data1.message)
        }
        data= {...data,id, token, avatar}
        console.log(data1)
        dispatch({ type: "user/signup", payload: data });
        return data1;
        
      } catch {
        throw new Error("something went wrong");
      }
    };
  }


export const { reducer } = userSlice;

export const selectUser = (state) => state.user





// LEGACY CODE

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case "login":
//       return {
//         ...state,
//         name: action.payload.name,
//         email: action.payload.email,
//         password: action.payload.password,
//         token: action.payload.token
//       };

//     case "signup":
//       return {
//         ...state,
//         name: action.payload.name,
//         email: action.payload.email,
//         password: action.payload.password,
//         token: action.payload.token
//       };

//     case "logout":
//       return  state ;

//     default:
//       return state;
//   }
// }


// export function logout() {
//   return { type: "logout" };
// }

// export function login(data) {
//   // return { type: "login", payload: data };
//   return async function (dispatch, getState){
//     let name, email, password, token = ""
//     const res = await fetch(`http://localhost:3002/api/v1/users/login`,{
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json ",
//       },
//     });
    
//     const login_data_recieved = await res.json();
//     console.log(name, email,password)
//     if(login_data_recieved.token){
//       toast.success("Logged in successfully")
//       const userData = login_data_recieved.data.user
//       name= userData.name;
//       email = userData.email;
//       password = userData.password;
//       token=login_data_recieved.token
//       }
//       else{
//         toast.error(login_data_recieved.message)
//       }
//       data = {...data,name, token}
//       console.log(login_data_recieved);
//       dispatch({type: "login", payload: data });
//       console.log(store.getState());
//   }
// }



// export function signup(data) {
//   // return { type: "signup", payload: data };
//   return async function (dispatch, getState) {
    
//     try {
//       let token = ""
//       const res = await fetch(`http://localhost:3002/api/v1/users/signup`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json ",
//         },
//       });

//       const data1 = await res.json();
//       if(data1.token){
//       toast.success("Acount created successfully")
//       token=data1.token
//       }
//       else{
//         toast.error(data1.message)
//       }
//       data= {...data, token}
//       console.log(data1)
//       dispatch({ type: "signup", payload: data });
//       console.log(store.getState());
      
//     } catch {
//       throw new Error("something went wrong");
//     }
//   };
// }



