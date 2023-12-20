import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosIntence from "../../api/AxiosInstance";
import axios from "axios";
import { toast } from "react-toastify";







export const Fetchjobpost= createAsyncThunk('fetchjobpostdata',async()=>{
    try{
       const res=await axiosIntence.get('jobpost');
       return res
    }
    catch(error){
        console.log(error)
    }
})


export const FetchAddjobpost= createAsyncThunk('fetchAddjobpostdata',async(data)=>{
    try{
       const res=await axiosIntence.post('jobpost/create',data
    //    ,{
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
)
       return res

    }
    catch(error){
        console.log(error)
    }
})



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



    export const FetchDetete=async (id)=>{

        try{
    
            const res= await axiosIntence.delete(`http://localhost:9900/api/jobpost/delete/${id}`)
            return res
            
            
                }catch(error){
                    console.log("error")
                }



    }





const initialState={
    jobpost_data:[],
    status:"success"
}

export const JobpostSlice=createSlice({
    name:"jobpost",
    initialState,
    reducer:{

    },
    extraReducers:{

    [Fetchjobpost.pending]:(state)=>{
        state.status="Loading...."
state.jobpost_data=null
    },

    [Fetchjobpost.fulfilled]:(state,{payload})=>{
        state.status="success"
state.jobpost_data=payload
    },

    [Fetchjobpost.rejected]:(state)=>{
        state.status="Try Again"
    },
}
})


