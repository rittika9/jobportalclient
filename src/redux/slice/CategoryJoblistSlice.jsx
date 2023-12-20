

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

export const FetchCategoryJoblist=createAsyncThunk('fetchCategoryJoblistData',async(id)=>{
    try{
     
const res= await axiosInstance.get(`categorydetailsforjob/${id}`)
return res?.data


    }catch(error){
        console.log(error)
    }
})






const initialState={
    categoryjoblist_data:[],
    status:"success"
}

// create slice

export const CategoryJoblistSlice=createSlice({
    name:"categoryDetails",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchCategoryJoblist.pending]:(state)=>{
    state.status="loding..."
    state.categoryjoblist_data=null
},

[FetchCategoryJoblist.fulfilled]:(state,{payload})=>{
    state.status='success'
state.categoryjoblist_data=payload
},
[FetchCategoryJoblist.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})