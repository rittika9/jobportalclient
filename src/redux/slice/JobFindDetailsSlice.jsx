

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

export const FetchJobFindDetails=createAsyncThunk('fetchJobFindDetailsData',async(id)=>{
    try{
     
const res= await axiosInstance.get(`jobfinddetails/${id}`)
return res?.data?.data


    }catch(error){
        console.log(error)
    }
})


// export const FetchJobFindApply=async data=>{
//     try{

//         const res= await axios.get(`/applyjobform/${data}`)
// return res


//     }catch(error){
//         console.log("error")
//     }
// }



const initialState={
    jobFindDetails_data:[],
    status:"success"
}

// create slice

export const JobFindDetailsSlice=createSlice({
    name:"JobFindDetails",
    initialState,
    reducer:{

    },
    extraReducers:{

[FetchJobFindDetails.pending]:(state)=>{
    state.status="loding..."
    state.jobFindDetails_data=null
},

[FetchJobFindDetails.fulfilled]:(state,{payload})=>{
    state.status='success'
state.jobFindDetails_data=payload
},
[FetchJobFindDetails.rejected]:(state)=>{
    state.status='Try Again'
}

    }
})