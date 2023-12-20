import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/AxiosInstance";






export const FetchjobFind= createAsyncThunk('fetchjobpostdata',async()=>{
    try{
       const res=axiosInstance.get('jobfind');
       return res
    }
    catch(error){
        console.log(error)
    }
})


// export const FetchFulltimejobFind= createAsyncThunk('fetchfulljobpostdata',async()=>{
//     try{
//        const res=axios.get('http://localhost:9900/api/jobfindby-fulltime');
//        return res
//     }
//     catch(error){
//         console.log(error)
//     }
// })


// export const FetchAddjobpost= createAsyncThunk('fetchAddjobpostdata',async(data)=>{
//     try{
//        const res=axios.post('http://localhost:9900/api/jobpost/create',data);
//        return res
//     }
//     catch(error){
//         console.log(error)
//     }
// })



// // export const FetchUpdate=createAsyncThunk("fetchUpdatedata",async(data)=>{
//     export const FetchEdit=async data=>{
//         try{
    
//     return await axiosIntence.get(`edit/${data}`)
//     // return res
    
    
//         }catch(error){
//             console.log("error")
//         }
//     }




//     export const FetchUpdate=async (data,id)=>{

//         try{
    
//             const res= await axiosIntence.post(`update/${id}`,data)
//             return res
            
            
//                 }catch(error){
//                     console.log("error")
//                 }



//     }



//     export const FetchDetete=async (id)=>{

//         try{
    
//             const res= await axiosIntence.delete(`delete/${id}`)
//             return res
            
            
//                 }catch(error){
//                     console.log("error")
//                 }



//     }





const initialState={
    jobfind_data:[],
    status:"success"
}

export const JobFindSlice=createSlice({
    name:"jobfind",
    initialState,
    reducer:{

    },
    extraReducers:{

    [FetchjobFind.pending]:(state)=>{
        state.status="Loading...."
state.jobfind_data=null
    },

    [FetchjobFind.fulfilled]:(state,{payload})=>{
        state.status="success"
state.jobfind_data=payload
    },

    [FetchjobFind.rejected]:(state)=>{
        state.status="Try Again"
    },
}
})


