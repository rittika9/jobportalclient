

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../api/AxiosInstance"



// export const FetchCategory=createAsyncThunk('fetchCategoryData',async()=>{
//     try{
     
// const res= axiosInstance.get(`${}`)
// return res?.data


//     }catch(error){
//         console.log(error)
//     }
// })

export const FetchCategoryDetails=createAsyncThunk('fetchCategoryDetailsData',async(id)=>{
    try{
     
const res= await axiosInstance.get(`categorydetails/${id}`)
return res?.data?.data


    }catch(error){
        console.log(error)
    }
})






const initialState={
    categoryDetails_data:[],
    status:"success"
}

// create slice

export const CategoryDetailsSlice=createSlice({
    name:"categoryDetails",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategoryDetails.pending]:(state)=>{
    state.status="loding..."
    state.categoryDetails_data=null
},

[FetchCategoryDetails.fulfilled]:(state,{payload})=>{
    state.status='success'
state.categoryDetails_data=payload
},
[FetchCategoryDetails.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})