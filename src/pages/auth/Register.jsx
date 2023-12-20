// import React from 'react'

// const Register = () => {
//   return (
//     <>

// <div>
//   <div className="formbold-main-wrapper">
//     {/* Author: FormBold Team */}
//     {/* Learn More: https://formbold.com */}
//     <div className="formbold-form-wrapper">
//       <img src="your-image-here.jpg" />
//       <form action="https://formbold.com/s/FORM_ID" method="POST">
//         <div className="formbold-input-flex">
//           <div>
//             <label htmlFor="firstname" className="formbold-form-label"> First Name </label>
//             <input type="text" name="firstname" id="firstname" placeholder="Your first name" className="formbold-form-input" />
//           </div>
//           <div>
//             <label htmlFor="lastname" className="formbold-form-label"> Last Name </label>
//             <input type="text" name="lastname" id="lastname" placeholder="Your last name" className="formbold-form-input" />
//           </div>
//         </div>
//         <div className="formbold-input-flex">
//           <div>
//             <label htmlFor="email" className="formbold-form-label"> Email </label>
//             <input type="email" name="email" id="email" placeholder="example@email.com" className="formbold-form-input" />
//           </div>
//           <div>
//             <label className="formbold-form-label">Gender</label>
//             <select className="formbold-form-input" name="occupation" id="occupation">
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="others">Others</option>
//             </select>
//           </div>
//         </div>
//         <div className="formbold-mb-3 formbold-input-wrapp">
//           <label htmlFor="phone" className="formbold-form-label"> Phone </label>
//           <div>
//             <input type="text" name="areacode" id="areacode" placeholder="Area code" className="formbold-form-input formbold-w-45" />
//             <input type="text" name="phone" id="phone" placeholder="Phone number" className="formbold-form-input" />
//           </div>
//         </div>
//         <div className="formbold-mb-3">
//           <label htmlFor="age" className="formbold-form-label"> Applying for Position: </label>
//           <input type="text" name="age" id="age" className="formbold-form-input" />
//         </div>
//         <div className="formbold-mb-3">
//           <label htmlFor="dob" className="formbold-form-label"> When can you start? </label>
//           <input type="date" name="dob" id="dob" className="formbold-form-input" />
//         </div>
//         <div className="formbold-mb-3">
//           <label htmlFor="address" className="formbold-form-label"> Address </label>
//           <input type="text" name="address" id="address" placeholder="Street address" className="formbold-form-input formbold-mb-3" />
//           <input type="text" name="address2" id="address2" placeholder="Street address line 2" className="formbold-form-input" />
//         </div>
//         <div className="formbold-mb-3">
//           <label htmlFor="message" className="formbold-form-label">
//             Cover Letter
//           </label>
//           <textarea rows={6} name="message" id="message" className="formbold-form-input" defaultValue={""} />
//         </div>
//         <div className="formbold-form-file-flex">
//           <label htmlFor="upload" className="formbold-form-label">
//             Upload Resume
//           </label>
//           <input type="file" name="upload" id="upload" className="formbold-form-file" />
//         </div>
//         <button className="formbold-btn">Apply Now</button>
//       </form>
//     </div>
//   </div>
//   <style dangerouslySetInnerHTML={{__html: "\n  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Inter', sans-serif;\n  }\n  .formbold-mb-3 {\n    margin-bottom: 15px;\n  }\n\n  .formbold-main-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 48px;\n  }\n\n  .formbold-form-wrapper {\n    margin: 0 auto;\n    max-width: 570px;\n    width: 100%;\n    background: white;\n    padding: 40px;\n  }\n\n  .formbold-img {\n    display: block;\n    margin: 0 auto 45px;\n  }\n\n  .formbold-input-wrapp > div {\n    display: flex;\n    gap: 20px;\n  }\n\n  .formbold-input-flex {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n  }\n  .formbold-input-flex > div {\n    width: 50%;\n  }\n  .formbold-form-input {\n    width: 100%;\n    padding: 13px 22px;\n    border-radius: 5px;\n    border: 1px solid #dde3ec;\n    background: #ffffff;\n    font-weight: 500;\n    font-size: 16px;\n    color: #536387;\n    outline: none;\n    resize: none;\n  }\n  .formbold-form-input::placeholder,\n  select.formbold-form-input,\n  .formbold-form-input[type='date']::-webkit-datetime-edit-text,\n  .formbold-form-input[type='date']::-webkit-datetime-edit-month-field,\n  .formbold-form-input[type='date']::-webkit-datetime-edit-day-field,\n  .formbold-form-input[type='date']::-webkit-datetime-edit-year-field {\n    color: rgba(83, 99, 135, 0.5);\n  }\n\n  .formbold-form-input:focus {\n    border-color: #6a64f1;\n    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n  }\n  .formbold-form-label {\n    color: #07074D;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  .formbold-form-file-flex {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .formbold-form-file-flex .formbold-form-label {\n    margin-bottom: 0;\n  }\n  .formbold-form-file {\n    font-size: 14px;\n    line-height: 24px;\n    color: #536387;\n  }\n  .formbold-form-file::-webkit-file-upload-button {\n    display: none;\n  }\n  .formbold-form-file:before {\n    content: 'Upload file';\n    display: inline-block;\n    background: #EEEEEE;\n    border: 0.5px solid #FBFBFB;\n    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.25);\n    border-radius: 3px;\n    padding: 3px 12px;\n    outline: none;\n    white-space: nowrap;\n    -webkit-user-select: none;\n    cursor: pointer;\n    color: #637381;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    margin-right: 10px;\n  }\n\n  .formbold-btn {\n    text-align: center;\n    width: 100%;\n    font-size: 16px;\n    border-radius: 5px;\n    padding: 14px 25px;\n    border: none;\n    font-weight: 500;\n    background-color: #6a64f1;\n    color: white;\n    cursor: pointer;\n    margin-top: 25px;\n  }\n  .formbold-btn:hover {\n    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n  }\n\n  .formbold-w-45 {\n    width: 45%;\n  }\n" }} />
// </div>

//     </>
//   )
// }







// export default Register


// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111


import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../../redux/slice/UserAuthSlice'
// import logo_3 from '../image/logo3.jpg'


const initialValue = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    answer:"",
    // image: ""
    isAdmin:"",
}

const Register = () => {
    const { redirectReg } = useSelector((state) => state?.Auth);
    const [user, setUser] = useState(initialValue);
    const [img, setimg] = useState("");
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const validation = () => {
        let error = {}

        if (!user.name) {
            error.name = "Name is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.phone) {
            error.phone = "phone is Required"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        if (!user.confirmpassword) {
          error.confirmpassword = "confirmpassword is Required"
      }
      if (!user.answer) {
        error.answer = "answer is Required"
    }

  //   if (!user.image) {
  //     error.image = "image is Required"
  // }
     if (!user.isAdmin) {
      error.isAdmin = "role is Required"
  }
        return error
    }

    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })


        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@phone is Required" })
                setUser({ ...user, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setUser({ ...user, phone: value })
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
        if (name === "confirmpassword") {
          if (value.length === 0) {
              setError({ ...error, confirmpassword: "@confirmpassword is Required" })
              setUser({ ...user, confirmpassword: "" })
          } else {
              setError({ ...error, confirmpassword: "" })
              setUser({ ...user, confirmpassword: value })
          }
      }
      if (name === "answer") {
        if (value.length === 0) {
            setError({ ...error, answer: "@answer is Required" })
            setUser({ ...user, answer: "" })
        } else {
            setError({ ...error, answer: "" })
            setUser({ ...user, answer: value })
        }
    }

    if (name === "isAdmin") {
        if (value.length === 0) {
            setError({ ...error, isAdmin: "@role is Required" })
            setUser({ ...user, isAdmin: "" })
        } else {
            setError({ ...error, isAdmin: "" })
            setUser({ ...user, isAdmin: value })
        }
    }
  //   if (name === "image") {
  //     if (value.length === 0) {
  //         setError({ ...error, image: "@image is Required" })
  //         setUser({ ...user, image: "" })
  //     } else {
  //         setError({ ...error, image: "" })
  //         setUser({ ...user, image: value })
  //     }
  // }
    }
 
    const SubmitInfo = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        let formData = new FormData();
        if (Object.keys(ErrorList).length === 0) {
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("phone", user.phone);
            formData.append("password", user.password);
            formData.append("confirmpassword", user.confirmpassword);
            formData.append("answer", user.answer);
            formData.append("isAdmin", user.isAdmin);

            // formData.append("image", user.image);
            formData.append("image", img);




            dispatch(registerUser(formData))
           
        }
    }
    const redirectUser = () => {
        let name = localStorage.getItem("name")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
        if (name !== null && name !== undefined && name !== "") {
            isInLoginPage && navigate("/login");
        }
    }
    useEffect(() => {
        redirectUser()
    }, [redirectReg])

  


    return (

        <section className="vh-100" style={{backgroundColor: '#90EE90',padding:"8rem 10rem 80rem 10rem" }}>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col col-xl-20" >
        <div className="card" style={{borderRadius: '3rem',height:"60rem"}} >
          <div className="row g-0" >
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://static.seattletimes.com/wp-content/uploads/2019/01/web-typing-ergonomics-1020x680.jpg" alt="login form" className="img-fluid" style={{ borderRadius: '0rem 0 0 1rem',height:"960px"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    {/* <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />   */}
                    <img  src="img/logo-1.jpg" alt style={{height:"5.3rem"}} />
                   
                    <h1><span style={{color: '#32CD32'}}>𝒿𝑜𝒷</span>𝓔𝓷𝓽𝓻𝔂</h1>
                    {/* <h3><img src={logo_3} alt="" class="img-fluid" style={{height:"3rem",marginBottom:"2px"}}/><span style={{color: '#32CD32'}}> 𝓓𝓲𝓰𝓲𝓽𝓪𝓵 </span>𝓛𝖊𝖆𝖗𝖓𝖎𝖓𝖌</h3> */}

                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>

                  {/* <div className='form-group' style={{fontFamily:"system-ui, sans-serif", color:"green",
   fontSize: "1.5rem",
  fontWeight: "bold",
  height: "1.1",
  gap:" 0.2em",
  }}>

<label style={{margin:"20px"}}>
                      <input type="radio" name="isAdmin" value= {user.isAdmin === 'employer'} 
  onChange={e => postUserData(e)} />
                           EMPLOYER    
                                          </label>
                  <label style={{margin:"20px"}}>
                    <input type="radio" name="isAdmin" value={user.isAdmin  === 'user'}   
 onChange={e => postUserData(e)}/>
                       CANDIDATE               
                                   </label>
                    
                 

                  </div>
                  <span style={{ color: "red" }}> {error.isAdmin} </span> */}
<div className='form-group' style={{fontFamily:"system-ui, sans-serif", color:"green",
   fontSize: "1.5rem",
  fontWeight: "bold",
  height: "1.1",
  gap:" 0.2em",
  }} name="isAdmin" value={user.isAdmin} onChange={e => postUserData(e)} >
                     <label style={{margin:"20px"}}>
                      <input type="radio" name="isAdmin" value= 'employer' checked= {user.isAdmin === 'employer'}     />
                      EMPLOYER </label>

                      <label style={{margin:"20px"}}>
                    <input type="radio"name="isAdmin"  value= 'user' checked= {user.isAdmin === 'user'}/>
                     CANDIDATE  </label>

                  </div>

                  <span style={{ color: "red" }}> {error.isAdmin} </span>




                            {/* <div className='form-group' style={{fontFamily:"system-ui, sans-serif", color:"green",
   fontSize: "1rem",
  fontWeight: "bold",
  height: "1.1",
  
  }}>
                            <label> seclet your role : </label>

     <select name="isAdmin" value={user.isAdmin} onChange={e => postUserData(e)}>

       <option value="user">CANDIDATE</option>

       <option value="employer">EMPLOYER</option>

     </select>

   </div> */}

<div className='row'>
    <div className='col col-md-6'>
    <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.name}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.name} </span>
                                </div>
    </div>
    <div className='col col-md-6'>
    <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.email}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.email} </span>
                                </div>
    </div>

</div>
                               {/* <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.name}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.name} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.email}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.email} </span>
                                </div> */}
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Mobile</label>
                                    <input type="text" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.phone}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.phone} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.password}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.password} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">ConfirmPassword</label>
                                    <input type="password" name="confirmpassword" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.confirmpassword}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.confirmpassword} </span>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Answer</label>
                                    <input type="text" name="answer" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.answer}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.answer} </span>
                                </div>


                                {/* <div className="form-group">
                                    <label for="exampleInputEmail1">Image</label>
                                    <input type="file" name="image" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={user.image}
                                        onChange={e => postUserData(e)} />
                                    <span style={{ color: "red" }}> {error.image} </span>
                                </div> */}

                             <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setimg(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
                  {img !== "" && img !== undefined && img !== null ? (
                    <img
                      style={{ height: "130px" }}
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>{img === "" && <p>Drag or drop content here</p>}</>
                  )}
                                 </div>




                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block"onClick={SubmitInfo} type="button"style={{borderRadius:"50rem"}}>Rgister</button>
                  </div>
                  {/* <h5 ><a className="small text-muted-success" href="#!">Forgot password?</a></h5> */}
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>You already register your account? <a href="/login" style={{color: '#FF0000'}}>Login here</a></p>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Register

// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { toast } from 'react-toastify';
// import { register } from '../../redux/slice/UserAuthSlice';
// // import { register } from '../Redux/regSlice';




// const Register = () => {
//       const[name,setName]=useState();
//       const[email,setEmail]=useState();
//       const[phone,setPhone]=useState();
//       const[password,setPassword]=useState();
//       const[answer,setAnswer]=useState();
//       const[confirmpassword,setConfirmpassword]=useState();

//     //   const[image,setImage]=useState();

//       const dispatch=useDispatch();
//       let history=useNavigate();
//       const handleSubmit=(e)=>{
//             e.preventDefault();
//             dispatch(register({name,email,phone,password,confirmpassword,answer}));
//             history("/login");
//         }
      
//     return (

// <>
//         <div className='container' >
//         <div className='row mt-5'>
//             <div className='col-4'></div>
//             <div className='col-4'>
//                 <form onSubmit={(e)=>handleSubmit(e)} className="form">
//                     <div className='card shadow p-3'>
//                         <div className='card-header'>
//                             <h4 className='text-center'>User Registration Form</h4>

//                         </div>
//                         <div className='card-body'>
//                             <div className='row'>
//                                 <div className='col-12'>
//                                     <div className='form-group'>
//                                         <label className='form-label'>Name <span className='err-msg'>*</span></label>
//                                         <input type="text" name="name" className='form-control' onChange={(e)=>setName(e.target.value)} pattern=".{3,}" title="three or more characters" required/>
//                                     </div>
//                                 </div>
                               
                               
//                                 <div className='col-12'>
//                                         <label className='form-label'>Email <span className='err-msg'>*</span></label>
//                                         <input  type="email" name="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} required/>
//                                 </div>
//                                 <div className='col-12'>
//                                         <label className='form-label'>Password <span className='err-msg'>*</span></label>
//                                         <input  type="password" name="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}  pattern=".{8,}" title="Eight or more characters" required/>
//                                 </div>
//                                 <div className='col-12'>
//                                         <label className='form-label'>confirmpassword <span className='err-msg'>*</span></label>
//                                         <input  type="password" name="confirmpassword" className='form-control' onChange={(e)=>setConfirmpassword(e.target.value)}  pattern=".{8,}" title="Eight or more characters" required/>
//                                 </div>
//                                 <div className='col-12'>
//                                         <label className='form-label'>Phone<span className='err-msg'>*</span></label>
//                                         <input  type="tel" name="phone" className='form-control' onChange={(e)=>setPhone(e.target.value)}   required/>
//                                 </div>
//                                 <div className='col-12'>
//                                         <label className='form-label'>Answer<span className='err-msg'>*</span></label>
//                                         <input  type="text" name="answer" className='form-control' onChange={(e)=>setAnswer(e.target.value)}  required/>
//                                 </div>
//                                 {/* <div className='col-12'>
//                                         <label className='form-label'>Image<span className='err-msg'>*</span></label>
//                                         <input  type="file" name="image" className='form-control' onChange={(e)=>setImage(e.target.value)}   required/>
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className='card-footer'>
//                         <button className='btn btn-primary btn-sm'>Register</button>
//                              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>You already register your account? <a href="/login" style={{color: '#FF0000'}}>Login here</a></p>

                        
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className='col-4'></div>
//         </div>
//     </div>






// 	<section className="login">
//   <div className="login_box">
//     <div className="left">
//       <div className="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt />Return home</a></div>
//       <div className="contact">
//         <form action>
//           <h3>SIGN UP</h3>
//           <input type="text" placeholder="USERNAME" />
//           <input type="email" placeholder="EMAIL" />
//           <input type="password" placeholder="PHONE-NUMBER" />

//           <input type="password" placeholder="PASSWORD" />
//           <input type="password" placeholder="CONFIRMPASSWORD" />
//           <input type="text" placeholder="ANSWER" />
//           <label>IMAGE</label>
//           <input type="file" placeholder="image" />



//           <button className="submit">LET'S GO</button>
          
//           <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>You already register your account? <a href="/login" style={{color: '#FF0000'}}>Login here</a></p>

//         </form>
//       </div>
//     </div>
//     <div className="right">
//       <div className="right-text">
//         <h2>LONYX</h2>
//         <h5>A UX BASED CREATIVE AGENCEY</h5>
//       </div>
//       {/* <div className="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt /></div> */}
//     </div>
//   </div>
// </section>


 



//     </>
//     )
// }

// export default Register


// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222