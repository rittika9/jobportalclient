import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RegLog, loginRequest } from '../../redux/slice/UserAuthSlice';
// import { RegLog, loginRequest } from '../redux/slice/UserAuthSlice'
// import logo_3 from '../image/logo3.jpg'



const initialValue = {
    email: "",
    password: ""
}
const LoginCandidate = () => {

    const [user, setUser] = useState(initialValue)
    const { redirectTo } = useSelector((state) => state?.Auth);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const dispatch = useDispatch();
//form validation
    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        return error
    }
//onchange validation
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }

    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(ErrorList)
        let data = {
            "email": user.email,
            "password": user.password,
        }
        dispatch(loginRequest(data))
    }


    //redirect if get the token or not get the token 
    const redirectUser = () => {
        let token = localStorage.getItem("token")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

        if (token !== null && token !== undefined && token !== "") {
            // window.location.pathname = getPathname;
            isInLoginPage && navigate("/");
        }
    }
    useEffect(() => {
        redirectUser()
    }, [redirectTo])

const log=()=>{
    dispatch(RegLog())
}
    return (
        <>
           



<section className="vh-100" style={{backgroundColor: '#90EE90',padding:"4rem 10rem 54rem 10rem"}}>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col col-xl-10" >
        <div className="card" style={{borderRadius: '3rem',marginBottom:"40rem"}} >
          <div className="row g-0" >
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://static.seattletimes.com/wp-content/uploads/2019/01/web-typing-ergonomics-1020x680.jpg" alt="login form" className="img-fluid" style={{borderRadius: '0rem 0 0 1rem',height:"600px"  }} />
              {/* <img src="images/signup-img.jpg" alt="login form" className="img-fluid" style={{borderRadius: '0rem 0 0 1rem',marginTop:"10rem"}} /> */}

            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    {/* <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />                      */}
                    {/* <h1><span style={{color: '#32CD32'}}>COM</span>PANY</h1> */}
                    <img  src="img/logo-1.jpg" alt style={{height:"5.3rem"}} />

                    <h1><span style={{color: '#32CD32'}}>𝒿𝑜𝒷</span>𝓔𝓷𝓽𝓻𝔂</h1>

                    {/* <h3><img src={logo_3} alt="" class="img-fluid" style={{height:"3rem",marginBottom:"2px"}}/><span style={{color: '#32CD32'}}> 𝓓𝓲𝓰𝓲𝓽𝓪𝓵 </span>𝓛𝖊𝖆𝖗𝖓𝖎𝖓𝖌</h3> */}

                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into <span style={{color:"#FF003F"}}>CANDIDATE</span> account</h5>

                  {/* <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div> */}

                                  <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" className="form-control"

                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.email} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" className="form-control"

                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.password} </span>
                                </div>
                  <div className="pt-1 mb-4">
                    <button  onClick={SubmitInfo}className="btn btn-success btn-lg btn-block" type="button"style={{borderRadius:"50rem"}}>Login</button>
                  </div>
                  <h5 ><a className="small text-muted-success" href="#!">Forgot password?</a></h5>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link onClick={log} to="/register" style={{color: '#FF0000'}}>Register here</Link></p>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Are you Employer? <Link onClick={log} to="/loginemployer" style={{color: '#FF0000'}}>Employer</Link></p>

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







        </>

    )
}

export default LoginCandidate





//  import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { loginRequest } from '../../redux/slice/UserAuthSlice';
// // import { login } from '../../redux/slice/UserAuthSlice';
// // // import logo_3 from '../image/logo3.jpg'



// const CandidateLogin = () => {
    
//     const[email,setEmail]=useState();
   
//     const[password,setPassword]=useState();
    
//     const dispatch=useDispatch();
//     let history=useNavigate();
//     const handleSubmit=(e)=>{
//           e.preventDefault();
//           dispatch(loginRequest({email,password}));
//           history("/");
//       }

//   return (
//     <>
//     <div className='container'>
//         <div className='row mt-5'>
//             <div className='col-4'></div>
//             <div className='col-4'>
//                 <form onSubmit={(e)=>handleSubmit(e)}className="form">
//                     <div className='card shadow p-3'>
//                         <div className='card-header'>
//                             <h4 className='text-center'>User Login Form</h4>

//                         </div>
//                         <div className='card-body'>
//                             <div className='row'>
                                
                               
                               
//                                 <div className='col-12'>
//                                         <label className='form-label'>Email <span className='err-msg'>*</span></label>
//                                         <input  type="email" name="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} required/>
//                                 </div>
//                                 <div className='col-12'>
//                                         <label className='form-label'>Password <span className='err-msg'>*</span></label>
//                                         <input  type="password" name="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}  pattern=".{8,}" title="Eight or more characters" required/>
//                                 </div>
                                
                                
//                             </div>
//                         </div>
//                         <div className='card-footer'>
//                         <button className='btn btn-primary btn-sm'>Login</button>
//                        Not registered? <Link to="/register">Register</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className='col-4'></div>
//         </div>
//     </div>
//     {/* <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
//           <div className="row justify-content-center">
//             <div className="col-lg-10 border rounded p-1">
//               <div className="border rounded text-center p-1">
//                 <div className="bg-white rounded text-center p-5">
//                   <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
//                   <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
//                     <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
//                     <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
//           <div className="container pb-5">
//             <div className="row g-5">
//               <div className="col-md-6 col-lg-4">
//                 <div className="bg-primary rounded p-4">
//                   <a href="index.html"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></a>
//                   <p className="text-white mb-0">
//                     Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-3">
//                 <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
//                 <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
//                 <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
//                 <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
//                 <div className="d-flex pt-2">
//                   <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
//                   <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
//                   <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
//                   <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
//                 </div>
//               </div>
//               <div className="col-lg-5 col-md-12">
//                 <div className="row gy-5 g-4">
//                   <div className="col-md-6">
//                     <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
//                     <a className="btn btn-link" href>About Us</a>
//                     <a className="btn btn-link" href>Contact Us</a>
//                     <a className="btn btn-link" href>Privacy Policy</a>
//                     <a className="btn btn-link" href>Terms &amp; Condition</a>
//                     <a className="btn btn-link" href>Support</a>
//                   </div>
//                   <div className="col-md-6">
//                     <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
//                     <a className="btn btn-link" href>Food &amp; Restaurant</a>
//                     <a className="btn btn-link" href>Spa &amp; Fitness</a>
//                     <a className="btn btn-link" href>Sports &amp; Gaming</a>
//                     <a className="btn btn-link" href>Event &amp; Party</a>
//                     <a className="btn btn-link" href>GYM &amp; Yoga</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="copyright">
//               <div className="row">
//                 <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
//                   © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
//                   <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
//                 </div>
//                 <div className="col-md-6 text-center text-md-end">
//                   <div className="footer-menu">
//                     <a href>Home</a>
//                     <a href>Cookies</a>
//                     <a href>Help</a>
//                     <a href>FQAs</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
    
    


//         <section className="login">
//   <div className="login_box">
//     <div className="left">
//       <div className="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt />Return home</a></div>
//       <div className="contact">
//         <form action>
//           <h3>SIGN IN </h3>
//           <input type="email" placeholder="Email" />
//           <input type="text" placeholder="PASSWORD" />
          



//           <button className="submit">LET'S GO</button>
//           Not registered? <Link to="/register">Register</Link>

//         </form>
//       </div>
//     </div>
//     <div className="right">
//       <div className="right-text">
//         <h2>LONYX</h2>
//         <h5> LOGIN FOR CANDIDATE </h5>
//       </div>
//       {/* <div className="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt /></div> */}
//     </div>
//   </div>
// </section>







//     </>
//   )
// }

// export default CandidateLogin




