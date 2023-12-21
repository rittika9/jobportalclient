import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/AxiosInstance";
import axios from "axios";




export const FetchFulltimejobFind= createAsyncThunk('fetchfulljobpostdata',async()=>{
    try{
       const res=await axiosInstance.get('jobfindby-fulltime');
       return res.data
    }
    catch(error){
        console.log(error)
    }
})

export const FetchParttimejobFind= createAsyncThunk('fetchparttimejobpostdata',async()=>{
    try{
       const res=await axiosInstance.get('jobfindby-parttime');
       return res.data
    }
    catch(error){
        console.log(error)
    }
})


export const FetchInternjobFind= createAsyncThunk('fetchinternjobpostdata',async()=>{
    try{
       const res=await axiosInstance.get('jobfindby-intern');
       console.log("intern...." ,res.data)
       return res.data
    }
    catch(error){
        console.log(error)
    }
})

// export const FetchInternjobFind= createAsyncThunk('fetchinternjobpostdata',async()=>{
//     try{
//        const res=await axios.get('http://localhost:9900/jobfindby-intern');
//        console.log("intern...." ,res.data)
//        return res.data
//     }
//     catch(error){
//         console.log(error)
//     }
// })



const initialState={
    type_data:[],
    status:"success"
}

// create slice

export const TypeSlice=createSlice({
    name:"type",
    initialState,
    reducer:{

    },
    extraReducers:{
// **********************************FULL TIME***********************************************
[FetchFulltimejobFind.pending]:(state)=>{
    state.status="loding..."
    state.type_data=null
},

[FetchFulltimejobFind.fulfilled]:(state,{payload})=>{
    state.status='success'
state.type_data=payload
},
[FetchFulltimejobFind.rejected]:(state)=>{
    state.status='Try Again'
},

// ***************************************PART TIME***************************************************************

[FetchParttimejobFind.pending]:(state)=>{
    state.status="loding..."
    state.type_data=null
},

[FetchParttimejobFind.fulfilled]:(state,{payload})=>{
    state.status='success'
state.type_data=payload
},
[FetchParttimejobFind.rejected]:(state)=>{
    state.status='Try Again'
},


// *******************************************Intern***************************************************
[FetchInternjobFind.pending]:(state)=>{
    state.status="loding..."
    state.type_data=null
},

[FetchInternjobFind.fulfilled]:(state,{payload})=>{
    state.status='success'
state.type_data=payload
},
[FetchInternjobFind.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})