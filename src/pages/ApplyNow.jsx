
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchApplyjob } from '../redux/slice/ApplyJobSlice'
import { FetchJobFindDetails } from '../redux/slice/JobFindDetailsSlice'
import moment from 'moment'





// import React from 'react'

// const ApplyNow = () => {
//   return (
//     <>

//     {/* Header End */}
//   <div className="container-xxl py-5 bg-dark page-header mb-5">
//     <div className="container my-5 pt-5 pb-4">
//       <h1 className="display-3 text-white mb-3 animated slideInDown">Apply Now</h1>
//       <nav aria-label="breadcrumb">
//         <ol className="breadcrumb text-uppercase">
//           <li className="breadcrumb-item"><a href="#">Home</a></li>
//           <li className="breadcrumb-item"><a href="#">Pages</a></li>
//           <li className="breadcrumb-item text-white active" aria-current="page">Apply Now</li>
//         </ol>
//       </nav>
//     </div>
//   </div>
//   {/* Header End */}



//           <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//     <div className="container">
//       <div className="row gy-5 gx-4">
//         <div className="col-lg-8">
        

//           <div className="mb-5">
//             <h4 className="mb-4">Apply For The Job</h4>
//             <form>
//               <div className="row g-3">
//                 <div className="col-12 col-sm-6">
//                   <label>Your Name</label>
//                   <input type="text" className="form-control"  />
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <label>your Email</label>
//                   <input type="email" className="form-control"/>
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <label>Phone-number</label>
//                   <input type="number" className="form-control"  />
//                 </div>
                
//                 <div className="col-12 col-sm-6">
//                   <label>Date of Birth</label>
//                   <input type="date" className="form-control" />
//                 </div>
//                 <div className="col-12">
//                   <label>address</label>
//                   <input type="text" className="form-control" />
//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <label>Work Experience</label>
//                   <input type="text" className="form-control"  />
//                 </div>
//  <div className="col-12 col-sm-6">
//                   <label>Education qualification</label>
//                   <input type="text" className="form-control"  />
//                 </div> 
//                 <div className="col-12 col-sm-6">
//                   <label>Upload Resume</label>
//                   <input type="file" className="form-control bg-white" />
//                 </div>
//                 <div className="col-12">
//                   <label>Coverletter</label>
//                   <textarea className="form-control" rows={5}  defaultValue={""} />
//                 </div>
//                 <div className="col-12">
//                   <button className="btn btn-primary w-100" type="submit">Apply Now</button>
//                 </div>
//               </div>
//             </form>
//           </div>

//         </div>
        
//         <div className="col-lg-4">
//           <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
//             <h4 className="mb-4">Job Summery</h4>
//             <p><i className="fa fa-angle-right text-primary me-2" />Published On: 01 Jan, 2045</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Vacancy: 123 Position</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Job Nature: Full Time</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Salary: $123 - $456</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Location: New York, USA</p>
//             <p className="m-0"><i className="fa fa-angle-right text-primary me-2" />Date Line: 01 Jan, 2045</p>
//           </div>
//           <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
//             <h4 className="mb-4">Company Detail</h4>
//             <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>




//     </>
//   )
// }







// export default ApplyNow







// ******************************************************************************************************




// const initialValue={
            
//   address: "",
//   dateofbirth:"",
//   experience:"",
//   qualification:"",

// }




// const ApplyNow = () => {
//   const  {id}  = useParams()
//   const{jobFindDetails_data}=useSelector((state)=>state?.jobfinddetails
      
//      )

    
//     const dispatch=useDispatch()
//     useEffect(()=>{
//       dispatch(FetchJobFindDetails(id))
//             },[id])
//             console.log('jobFindDetails--->',jobFindDetails_data);


//   const Candidatename = localStorage.getItem("name");
//   const email = localStorage.getItem("email");
//   const phone = localStorage.getItem("phone");
//   const user = localStorage.getItem("id");
// const job=jobFindDetails_data?._id;
  
    

// const[jobApply,setjobApply]=useState(initialValue)
// // const[error,setError]=useState({})
// const navigate=useNavigate()
// // const dispatch=useDispatch()


//     // const validation=()=>{

//     //     let error={}
//     //     if (!user.name){
//     //         error.name="Name is requerd"
//     //     }
//     //      if(!user.email){
//     //         error.email="Email is requerd"
//     //     }
//     //     else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email))
//     //     {
//     //         error.email="Enter a valid email"
//     //     }
        
//     //     if(!user.phone){
//     //         error.phone="phone_no is requerd"
//     //     }
         
//     //     if(!user.city){
//     //         error.city="city is requerd"
//     //     }
//     //     if(!user.class){
//     //         error.class="class is requerd"
//     //     }
    
//     //     return error
//     //     }

//         let name,value
//         const postUserData=(e)=>{
//             name=e.target.name
//             value=e.target.value

//             setjobApply({ ...jobApply,[name]:value})
//             // if (name === "name") {
//             //     if (value.length === 0) {
//             //         setError({ ...error, name: "@Name is Required" })
//             //         setUser({ ...user, name: "" })
//             //     } else {
//             //         setError({ ...error, name: "" })
//             //         setUser({ ...user, name: value })
//             //     }
//             // }
            
//             // if (name === "email") {
//             //     if (value.length === 0) {
//             //         setError({ ...error, email: "@Email is Required" })
//             //         setUser({ ...user, email: "" })
//             //     } else {
//             //         setError({ ...error, email: "" })
//             //         setUser({ ...user, email: value })
//             //     }
//             // }
            
//             // if (name === "phone") {
//             //     if (value.length === 0) {
//             //         setError({ ...error, phone: "@Phone is Required" })
//             //         setUser({ ...user, phone: "" })
//             //     } else {
//             //         setError({ ...error, phone: "" })
//             //         setUser({ ...user, phone: value })
//             //     }
//             // }
            
//             // if (name === "city") {
//             //     if (value.length === 0) {
//             //         setError({ ...error, city: "@City is Required" })
//             //         setUser({ ...user, city: "" })
//             //     } else {
//             //         setError({ ...error, city: "" })
//             //         setUser({ ...user, city: value })
//             //     }
//             // }
            
//             // if (name === "class") {
//             //     if (value.length === 0) {
//             //         setError({ ...error, class: "@Class is Required" })
//             //         setUser({ ...user, class: "" })
//             //     } else {
//             //         setError({ ...error, class: "" })
//             //         setUser({ ...user, class: value })
//             //     }
//             // }


//         }


//     //     const SubmitInfo=async(e)=>{
//     //         e.preventDefault()
//     //         let ErrorList = validation()
//     //         setError(ErrorList)
//     //         if (Object.keys(ErrorList).length === 0) {
//     //             dispatch(FetchAddStu(user))
//     //          navigate('/')
//     //           toast("data Successfully added")
//     //     }
//     // }
//     const SubmitInfo=async(e)=>{
//       e.preventDefault()
//           dispatch(FetchApplyjob({jobApply,user,job}))

//        navigate('/user-dashboard')
//         toast("data Successfully added")
  
// }
        

//   return (
//     <>
    
    
   
    
//     {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
    

//     {/* Header End */}
//     <div className="container-xxl py-5 bg-dark page-header mb-5">
//     <div className="container my-5 pt-5 pb-4">
//       <h1 className="display-3 text-white mb-3 animated slideInDown">Apply Now</h1>
//       <nav aria-label="breadcrumb">
//         <ol className="breadcrumb text-uppercase">
//           <li className="breadcrumb-item"><a href="#">Home</a></li>
//           <li className="breadcrumb-item"><a href="#">Pages</a></li>
//           <li className="breadcrumb-item text-white active" aria-current="page">Apply Now</li>
//         </ol>
//       </nav>
//     </div>
//   </div>
//   {/* Header End */}



//           <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//     <div className="container">
//       <div className="row gy-5 gx-4">
//         <div className="col-lg-8">
        

//           <div className="mb-5">
//             <h4 className="mb-4">Apply For The Job {jobFindDetails_data?.companyname}</h4>
//             <form onSubmit={SubmitInfo} className="form">
//               <div className="row g-3">
//                 <div className="col-12 col-sm-6">
//                 <label> Name </label>
//                     {/* <input type="text" className="form-control" name="name" value={user.name} onChange={e => postUserData(e)} /> */}
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span> */}
//                                          <h5 type="text" className="form-control" name="name" >{Candidatename}</h5> 
//                                          {/* <h5 type="text" class="form-control" name="user"  value={id}/> */}

//                 </div>
//                 <div className="col-12 col-sm-6">
//                   <label>your Email</label>
//                     {/* <input type="email" className="form-control" name="email" value={user.email} onChange={e => postUserData(e)} /> */}
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span> */}           
//                     <input type="email" className="form-control"  value={email} readOnly/>

//                          </div>
//                 <div className="col-12 col-sm-6">
//                   <label>Phone-number</label>
//                   {/* <input type="number" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)} /> */}
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span> */}  
//                     <h5 type="text" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)}>{phone}</h5> 

//                             </div>
                
//                 <div className="col-12 col-sm-6">
//                   <label>Date of Birth</label>
//                   <input type="date" className="form-control" />
//                 </div>
//                 <div className="col-12">
//                   <label>address</label>
//                   <input type="text" className="form-control" name="address" value={jobApply.address} onChange={e => postUserData(e)} />
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span> */}       
//                              </div>
//                 <div className="col-12 col-sm-6">
//                   <label>Work Experience</label>
//                   <input type="text" className="form-control" name="experience" value={jobApply.experience} onChange={e => postUserData(e)} />
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span> */}
//                                     </div>
//  <div className="col-12 col-sm-6">
//                   <label>Education qualification</label>
//                   <input type="text" className="form-control" name="qualification" value={jobApply.qualification} onChange={e => postUserData(e)} />
//                     {/* <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span> */}
//                                     </div> 
//                 {/* <div className="col-12 col-sm-6">
//                   <label>Upload Resume</label>
//                   <input type="file" className="form-control bg-white" />
//                 </div> */}
//                 <div className="col-12">
//                   <label>Coverletter</label>
//                   <textarea className="form-control" rows={5}  defaultValue={""} />
//                 </div>
//                 <div className="col-12">
//                   <button className="btn btn-primary w-100" type="submit">Apply Now</button>
//                 </div>
//               </div>
//             </form>
//           </div>

//         </div>
        
//         <div className="col-lg-4">
//           <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
//             <h4 className="mb-4">Job Summery</h4>
//             <p><i className="fa fa-angle-right text-primary me-2" />Published On: 01 Jan, 2045</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Vacancy: 123 Position</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Job Nature: Full Time</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Salary: $123 - $456</p>
//             <p><i className="fa fa-angle-right text-primary me-2" />Location: New York, USA</p>
//             <p className="m-0"><i className="fa fa-angle-right text-primary me-2" />Date Line: 01 Jan, 2045</p>
//           </div>
//           <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
//             <h4 className="mb-4">Company Detail</h4>
//             <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>


//     </>
//   )
// }

// export default ApplyNow
// *******************************************************************************************************

// 1111111111111111111111111111111111111111111111111111111111111111111111


const ApplyNow = () => {
  const { id } = useParams()
  const{jobFindDetails_data}=useSelector((state)=>state?.jobfinddetails
      
     )

    
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(FetchJobFindDetails(id))
            },[id])


    
    console.log('cd--->',jobFindDetails_data);


    const[address,setAddress]=useState();
    const[dateofbirth,setDateofbirth]=useState();
    const[experience,setExperience]=useState();
    const[qualification,setQualification]=useState();

    const category=jobFindDetails_data?.category?.[0]._id;

    const job=jobFindDetails_data?._id;
    const user=localStorage.getItem("id");
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    const phone=localStorage.getItem("phone");


    let history=useNavigate();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      dispatch(FetchApplyjob({name,email,phone,address,dateofbirth,experience,qualification,job,user,category}));
      history(`/user-dashboard`);
toast( <i className="fa fa-check-circle text-primary">  Thank you!! your submission has been sent</i>)

    }

  return (
    <>

    {/* Header End */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
    <div className="container my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Apply Now</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Apply Now</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}



          <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row gy-5 gx-4">
        <div className="col-lg-8">
        

          <div className="mb-5">
            <h4 className="mb-4">Apply For The Job {jobFindDetails_data?.category?.[0]?.title}</h4>
            <form onSubmit={(e)=>handleSubmit(e)} className="form">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label>Your Name</label>
                  <h5 type="text" className="form-control" name="name" >{name}</h5> 
                </div>
                <div className="col-12 col-sm-6">
                  <label>your Email</label>
                 <input type="email" className="form-control"  value={email} readOnly/>
                </div>
                <div className="col-12 col-sm-6">
                  <label>Phone-number</label>
                  <input type="phone" className="form-control"  value={phone} readOnly/>
                </div>               
                <div className="col-12 col-sm-6">
                  <label>Date of Birth</label>
                  <input type="date" className="form-control"onChange={(e)=>setDateofbirth(e.target.value)} />
                </div>
                <div className="col-12">
                  <label>address</label>
                  <input type="text" className="form-control" name="address" onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div className="col-12 col-sm-6">
                  <label>Work Experience</label>
                  <input type="text" className="form-control" onChange={(e)=>setExperience(e.target.value)}  />
                </div>
               <div className="col-12 col-sm-6">
                  <label>Education qualification</label>
                  <input type="text" className="form-control" onChange={(e)=>setQualification(e.target.value)}  />
                </div> 

                <div className="col-12">
                  <label>Coverletter</label>
                  <textarea className="form-control" rows={5}  defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                </div>
              </div>
            </form>
          </div>

        </div>
        
        <div className="col-lg-4">
          <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
          <h4 className="mb-4">Job Summery</h4>
            {/* <p><i className="fa fa-angle-right text-primary me-2" />Published On: 01 Jan, 2045</p> */}
            <p><i className="fa fa-angle-right text-primary me-2" />Vacancy: {jobFindDetails_data?.vacancy} Position</p>
            <p><i className="fa fa-angle-right text-primary me-2" />Job Nature: {jobFindDetails_data?.type}</p>
            <p><i className="fa fa-angle-right text-primary me-2" />Salary: {jobFindDetails_data?.salary}</p>
            <p><i className="fa fa-angle-right text-primary me-2" />Location: {jobFindDetails_data?.location}</p>
            <p className="m-0"><i className="fa fa-angle-right text-primary me-2" />Date Line: {moment(jobFindDetails_data?.lastdate).format('MMMM Do YYYY')}</p> 
          </div>
          <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
            <h4 className="mb-4">Company Detail</h4>
            <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
          </div>
        </div>
      </div>
    </div>
  </div>




    </>
  )
}







export default ApplyNow

// 11111111111111111111111111111111111111111111111111111111111111