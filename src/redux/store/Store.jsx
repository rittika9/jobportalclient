import{configureStore}from"@reduxjs/toolkit"
import { CategorySlice } from "../slice/CategorySlice"
import { CategoryDetailsSlice } from "../slice/CategoryDetailsSlice"
import { UserAuthSlice } from "../slice/UserAuthSlice"
import { JobpostSlice } from "../slice/JobPostSlice"
import { JobFindSlice } from "../slice/JobFindSlice"
import { JobFindDetailsSlice } from "../slice/JobFindDetailsSlice"
import { CategorySidebarSlice } from "../slice/CategorySidebarSlice"
import { CategoryJoblistSlice } from "../slice/CategoryJoblistSlice"
import { ApplyJobSlice } from "../slice/ApplyJobSlice"
import { User_DashboardSlice } from "../slice/User_DashboardSlice"
import { Employer_DashboardSlice } from "../slice/Employer_DashboardSlice"
import { TypeSlice } from "../slice/TypeSlice"







const Store=configureStore({
reducer:{
 category:CategorySlice.reducer,
 categoryDetails:CategoryDetailsSlice.reducer,
 Auth:UserAuthSlice.reducer,
jobpost:JobpostSlice.reducer,
jobfind:JobFindSlice.reducer,
jobfinddetails:JobFindDetailsSlice.reducer,
categorysidebar:CategorySidebarSlice.reducer,
categoryjoblist:CategoryJoblistSlice.reducer,
applyjob:ApplyJobSlice.reducer,
userdashboard:User_DashboardSlice.reducer,
employerdashboard:Employer_DashboardSlice.reducer,
type:TypeSlice.reducer,








}
})

export default Store