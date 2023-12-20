

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/AxiosInstance"
import axios from "axios"



export const FetchEmployerDashboard=createAsyncThunk('fetchEData',async(id)=>{
    try{
     
const res= await axiosInstance.get(`employerdashboard/${id}`)
console.log("employerdashboard-->",res?.data)

return res?.data


    }catch(error){
        console.log(error)
    }
})




const initialState={
    employerdashboard_data:[],
    status:"success"
}

// create slice

export const Employer_DashboardSlice=createSlice({
    name:"employerdashboard",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchEmployerDashboard.pending]:(state)=>{
    state.status="loding..."
    state.employerdashboard_data=null
},

[FetchEmployerDashboard.fulfilled]:(state,{payload})=>{
    state.status='success'
state.employerdashboard_data=payload
},
[FetchEmployerDashboard.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})