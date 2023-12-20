

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/AxiosInstance"
import axios from "axios"



export const FetchCategory=createAsyncThunk('fetchCategoryData',async()=>{
    try{
     
const res= await axiosInstance.get('category')
return res?.data


    }catch(error){
        console.log(error)
    }
})

// export const FetchCategory=createAsyncThunk('fetchCategoryData',async()=>{
//     try{
     
// const res= await axios.get('http://localhost:9900/api/category')
// return res?.data


//     }catch(error){
//         console.log(error)
//     }
// })






const initialState={
    category_data:[],
    status:"success"
}

// create slice

export const CategorySlice=createSlice({
    name:"category",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategory.pending]:(state)=>{
    state.status="loding..."
    state.category_data=null
},

[FetchCategory.fulfilled]:(state,{payload})=>{
    state.status='success'
state.category_data=payload
},
[FetchCategory.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})