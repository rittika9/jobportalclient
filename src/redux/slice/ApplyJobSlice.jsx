import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/AxiosInstance";






// export const FetchAddStu= createAsyncThunk('fetchAdddata',async(data)=>{
//     try{
//        const res=axiosIntence.post(`applyjob`,data)
//        return res
//     }
//     catch(error){
//         console.log(error)
//     }
// })


export const FetchApplyjob=createAsyncThunk('fetchFetchApplyjobData',async(data)=>{
    try{
     
const res= await axiosInstance.post("applyjob",data)
return res


    }catch(error){
        console.log(error)
    }
})


const initialState={
    applyjob_data:[],
    status:"success"
}

export const ApplyJobSlice=createSlice({
    name:"applyjob",
    initialState,
    reducer:{

    },
    extraReducers:{

    [FetchApplyjob.pending]:(state)=>{
        state.status="Loading"
          state.applyjob_data=null
    },

    [FetchApplyjob.fulfilled]:(state,{payload})=>{
        state.status="success"
          state.applyjob_data=payload
    },

    [FetchApplyjob.rejected]:(state)=>{
        state.status="Try Again"
    },
}
})