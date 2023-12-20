

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/AxiosInstance"
import axios from "axios"



export const FetchUserDashboard=createAsyncThunk('fetchUData',async(id)=>{
    try{
     
const res= await axiosInstance.get(`userdashboard/${id}`)
console.log("userdashboard-->",res?.data)

return res?.data


    }catch(error){
        console.log(error)
    }
})




const initialState={
    userdashboard_data:[],
    status:"success"
}

// create slice

export const User_DashboardSlice=createSlice({
    name:"userdashboard",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchUserDashboard.pending]:(state)=>{
    state.status="loding..."
    state.userdashboard_data=null
},

[FetchUserDashboard.fulfilled]:(state,{payload})=>{
    state.status='success'
state.userdashboard_data=payload
},
[FetchUserDashboard.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})