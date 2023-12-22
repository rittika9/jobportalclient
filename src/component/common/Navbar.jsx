import React from 'react'
import { logout } from '../../redux/slice/UserAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Navigate } from 'react-router-dom'
import {imageUrl} from "../../api/ImageUrl"


const Navbar = () => {

  const dispatch = useDispatch();
  const { Logouttoggle } = useSelector((state) => state?.Auth);
  const name = localStorage.getItem("name");
  const image = localStorage.getItem("image");

//  console.log(name,"name")
  const log = () => {
    dispatch(logout())
    // Navigate("/login")
  }

  


  return (
    <>

{/* Navbar Start */}
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
    {/* <h1 className="m-0 text-primary">JobEntry</h1> */}
    <img  src="../img/logo-1.jpg" alt style={{height:"4.8rem",marginBottom:"2px"}} />

    <h1><span style={{color: '#32CD32'}}>𝒿𝑜𝒷</span>𝓔𝓷𝓽𝓻𝔂</h1>

  </a>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <a href="/" className="nav-item nav-link active">Home</a>
      <a href="/about" className="nav-item nav-link">About</a>
      <a href="/job-list" className="nav-item nav-link">Find A Job </a>
      <a href="/category" className="nav-item nav-link">Category</a>


      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/job-list" className="dropdown-item">Job List</a>
          <a href="/job-detail" className="dropdown-item">Job Detail</a>
        </div>
      </div> */}
      
      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/user-dashboard" className="dropdown-item">User-Dashboard</a>
          <a href="/testimonial" className="dropdown-item">Testimonial</a>
          <a href="/404" className="dropdown-item">404</a>
        </div>
      </div> */}
      <a href="/contact" className="nav-item nav-link">Contact</a>
      {/* <a href="/post-job-list" className="nav-item nav-link">Post job</a> */}
    {/* <Link to="/register" className="nav-item nav-link">Register</Link> */}
    {Logouttoggle ?
              <>
               {/* <NavLink className="nav-link bg bg-success" to="/details">Hi..{name}</NavLink> */}
               {/* <Link  className="nav-item nav-link"  to="">Hi..{name}</Link> */}

               <div className="nav-item dropdown">
               <Link className="nav-link dropdown-toggle" to="">
    {/* <img src={image} className="rounded-circle"/> */}
    <img src={`${imageUrl}/${image}`}      className="rounded-circle" height={"35px"}/>
    Hi..{name}
</Link> 
                    <div className="dropdown-menu rounded-0 m-0">
          <a href="/user-dashboard" className="dropdown-item">User-Dashboard</a>
          <a href="/employer-dashboard" className="dropdown-item">Employer-Dashboard</a>
          {/* <a href="/testimonial" className="dropdown-item">Testimonial</a> */}
          <a href="/404" className="dropdown-item">404</a>
        </div>
      </div>
               
               {/* <Link  className="nav-item nav-link" onClick={log}>Logout</Link> */}
               <Link className="nav-item nav-link" to="/login" onClick={log}>
                Logout
              </Link>
               
              </>
              :
          //  <Link  className="nav-item nav-link" >Login</Link>
          <Link className="nav-item nav-link" to="/login">
          Login
        </Link>
            }


    </div>
    <a href="/post-job-list" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i className="fa fa-arrow-right ms-3" /></a>
  </div>
</nav>
{/* Navbar End */}



    </>
  )
}

export default Navbar








// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link, Navigate} from 'react-router-dom';
// import { useDispatch } from 'react-redux'
// import { logout } from '../../redux/slice/UserAuthSlice';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { Logouttoggle } = useSelector((state) => state?.Auth);
//   const name = localStorage.getItem("name");
//  // console.log(name,"name")
//   const logOut = () => {
//     dispatch(logout())
//     Navigate("/login")
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
           
           
//             {Logouttoggle?
//               <>
//                <li className="nav-item">
//                <Link className="nav-link bg bg-warning">Hi..{name}</Link>             
//                </li>
               
//                <li className="nav-item">
//                <Link className="nav-link" onClick={logOut}>Logout</Link>
//                </li>
//               </>
//               :
//               <li className="nav-item">
//            <Link className="nav-link" >Login</Link>
//               </li>
//             }
          
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
