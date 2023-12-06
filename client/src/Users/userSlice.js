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
    }
  }
})

export const {logout} = userSlice.actions;

export function login(data) {
    // return { type: "login", payload: data };
    return async function (dispatch, getState){
      let name, email, password, token, id,avatar = ""
      const res = await fetch(`http://localhost:3002/api/v1/users/login`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json ",
        },
      });
      
      const login_data_recieved = await res.json();
      console.log(name, email,password)
      if(login_data_recieved.token){
        toast.success("Logged in successfully")
        const userData = login_data_recieved.data.user
        id= userData._id;
        name= userData.name;
        email = userData.email;
        password = userData.password;
        token=login_data_recieved.token;
        avatar=userData.avatar
        }
        else{
          toast.error(login_data_recieved.message)
        }
        data = {...data,name, token, id, avatar}
        console.log(login_data_recieved);
        dispatch({type: "user/login", payload: data });
        console.log(store.getState());
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




const store = configureStore({
  reducer: {
    user: userSlice.reducer
  },
})

export const selectUser = (state) => state.user

export default store;




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



