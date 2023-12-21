import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/AxiosInstance'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const initialState = {
  loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null
}

export const registerUser = createAsyncThunk("registeruser", async (user) => {
  try {
    const ress = await axiosInstance.post("registeruser", user);
    return ress?.data;

  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});
// *******************user login********************


export const loginRequest = createAsyncThunk("loginuser", async (data) => {
  try {
    const res = await axiosInstance.post("loginuser", data);
    console.log(res)
    toast(res?.data?.message);
    return res;

  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});

// *******************employer login********************

export const loginemployerRequest  = createAsyncThunk("loginEmployer", async (data) => {
  try {
    const res = await axiosInstance.post("loginemployer", data);
    console.log("employee data----",res)
    toast(res?.data?.message);
    return res;
  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});





export const UserAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //check for auth token 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast("logout successfully")
      state.Logouttoggle = false

    },

    
    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false

    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    }


  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {

      if (payload?.success === true) {
        // localStorage.setItem("name", payload?.user?.name)

        localStorage.setItem("name", payload.data?.name)
        // localStorage.setItem("image", payload.data?.image)
        // state.redirectReg = "/login"

        if(payload.data?.isAdmin==="employer"){
          state.redirectReg = "/loginemployer"
        }
        else{
          state.redirectReg = "/login"
        }
        // state.redirectReg = payload.data?.isAdmin === "user" ? "/login" : "/loginemployer";

        toast(payload?.token)
        toast(`hi ${payload?.message}`)

        // toast(`hi ${payload?.data?.name} Register successfully`)
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //*****************************user login******************************************************
    [loginRequest.pending]: (state) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, { payload }) => {
      if (payload?.status === 200) {
        localStorage.setItem("token", payload?.data?.token)
        localStorage.setItem("name", payload?.data?.data?.name);
        localStorage.setItem("phone", payload?.data?.data?.phone);
      localStorage.setItem("email", payload?.data?.data?.email);
      localStorage.setItem("isAdmin", payload?.data?.data?.isAdmin);
      localStorage.setItem("id", payload?.data?.data?._id);
      localStorage.setItem("image", payload?.data?.data?.image);


        state.Logouttoggle = true
        state.redirectTo="/"
        toast(payload?.message)
      }

    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false;

    },

// ********************************employer loing************************
  [loginemployerRequest.pending]: (state) => {
    state.loading = true;
  },
  [loginemployerRequest.fulfilled]: (state, { payload }) => {
    if (payload?.status === 200) {
      // localStorage.setItem("token", payload?.token);
      localStorage.setItem("token", payload?.data?.token)
      localStorage.setItem("name", payload?.data?.data?.name);
      localStorage.setItem("email", payload?.data?.data?.email);
      localStorage.setItem("isAdmin", payload?.data?.data?.isAdmin);
      localStorage.setItem("id", payload?.data?.data?._id);
      localStorage.setItem("image", payload?.data?.data?.image);


      // localStorage.setItem("image", payload?.user?.image)

      state.Logouttoggle = true
      state.redirectTo="/"
      toast(payload?.message)
    }

  },
  [loginemployerRequest.rejected]: (state, action) => {
    state.loading = false;
    toast("Wrong Email or Password!");


  },




  },
})

export const {check_token, redirectToo, logout, redirectTo_Register,RegLog } = UserAuthSlice.actions




// **************************************************************************************************************************


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axios from "axios";


//  export const register=createAsyncThunk("register",async(data)=>{
//     try{
//         const response=await axios.post("http://localhost:9900/api/registeruser", data
//         )
//         toast(response?.data?.message);
//        localStorage.setItem("name",response?.data?.user?.name);
       
//         return response;
//     }catch(error){
//         toast(error?.response?.data?.message)
//        console.log(error);
//     }
// })

// export const login=createAsyncThunk("login",async(data)=>{
//    try{
//        const response=await axios.post("http://localhost:9900/api/loginuser", data);
//        toast(response?.data?.message);
//        localStorage.setItem("name",response?.data?.user?.name);
//        localStorage.setItem("token",response?.data?.token);
//        return response;
//    }catch(error){
//        toast(error?.response?.data?.message)
//    }
// })





// ************************************************************************************************************************************