

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosInstance from "../../api/AxiosInstance"



// export const FetchCategory=createAsyncThunk('fetchCategoryData',async()=>{
//     try{
     
// const res= axiosInstance.get("category")
// return res?.data


//     }catch(error){
//         console.log(error)
//     }
// })

export const FetchCategorysidebar=createAsyncThunk('fetchCategorysidebarData',async()=>{
    try{
     
const res= await axiosInstance.get('categoryforjob')
return res?.data


    }catch(error){
        console.log(error)
    }
})






const initialState={
    categorysidebar_data:[],
    status:"success"
}

// create slice

export const CategorySidebarSlice=createSlice({
    name:"categorysidebar",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategorysidebar.pending]:(state)=>{
    state.status="loding..."
    state.categorysidebar_data=null
},

[FetchCategorysidebar.fulfilled]:(state,{payload})=>{
    state.status='success'
state.categorysidebar_data=payload
},
[FetchCategorysidebar.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})