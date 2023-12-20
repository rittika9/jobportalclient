













import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchAddjobpost } from '../../redux/slice/JobPostSlice'


import { FetchCategorysidebar } from '../../redux/slice/CategorySidebarSlice'



const initialValue = {
    companyname: "",
    description: "",
    responsibility: "",
    skills: "",
    vacancy: "",
    location: "",
    type: "",
    salary: "",
    lastdate: "",
    category: "",
    image: "",
    // user: "",


}




const AddPostJob = () => {


const employer_id=localStorage.getItem("id")



    const [user, setUser] = useState(initialValue)
    const [error, setError] = useState({})
    // const [img, setimg] = useState();

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { categorysidebar_data } = useSelector((state) => state?.categorysidebar)

    useEffect(() => {
        dispatch((FetchCategorysidebar()))

    }, [])
    console.log('c==>', categorysidebar_data);





    const validation = () => {

        let error = {}
        if (!user.companyname) {
            error.companyname = "companyname is requerd"
        }
        if (!user.description) {
            error.description = "description is requerd"
        }


        if (!user.responsibility) {
            error.responsibility = "responsibility is requerd"
        }

        if (!user.skills) {
            error.skills = "skills is requerd"
        }
        if (!user.vacancy) {
            error.vacancy = "vacancy is requerd"
        }

        if (!user.location) {
            error.location = "location is requerd"
        }
        if (!user.type) {
            error.type = "type is requerd"
        }
        if (!user.salary) {
            error.salary = "salary is requerd"
        }
        if (!user.lastdate) {
            error.lastdate = "lastdate is requerd"
        }
        if (!user.category) {
            error.category = "category is requerd"
        }
        // if (!user.image) {
        //     error.image = "image is requerd"
        // }

        return error
    }



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUser({ ...user, image: file });

         
    };



    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value


        setUser({ ...user, [name]: value })

        if (name === "companyname") {
            if (value.length === 0) {
                setError({ ...error, companyname: "@companyname is Required" })
                setUser({ ...user, companyname: "" })
            } else {
                setError({ ...error, companyname: "" })
                setUser({ ...user, companyname: value })
            }
        }

        if (name === "description") {
            if (value.length === 0) {
                setError({ ...error, description: "@description is Required" })
                setUser({ ...user, description: "" })
            } else {
                setError({ ...error, description: "" })
                setUser({ ...user, description: value })
            }
        }

        if (name === "responsibility") {
            if (value.length === 0) {
                setError({ ...error, responsibility: "@responsibility is Required" })
                setUser({ ...user, responsibility: "" })
            } else {
                setError({ ...error, responsibility: "" })
                setUser({ ...user, responsibility: value })
            }
        }

        if (name === "skills") {
            if (value.length === 0) {
                setError({ ...error, skills: "@skills is Required" })
                setUser({ ...user, skills: "" })
            } else {
                setError({ ...error, skills: "" })
                setUser({ ...user, skills: value })
            }
        }

        if (name === "vacancy") {
            if (value.length === 0) {
                setError({ ...error, vacancy: "@vacancy is Required" })
                setUser({ ...user, vacancy: "" })
            } else {
                setError({ ...error, vacancy: "" })
                setUser({ ...user, vacancy: value })
            }
        }

        if (name === "location") {
            if (value.length === 0) {
                setError({ ...error, location: "@location is Required" })
                setUser({ ...user, location: "" })
            } else {
                setError({ ...error, location: "" })
                setUser({ ...user, location: value })
            }
        }
        if (name === "type") {
            if (value.length === 0) {
                setError({ ...error, type: "@type is Required" })
                setUser({ ...user, type: "" })
            } else {
                setError({ ...error, type: "" })
                setUser({ ...user, type: value })
            }
        }
        if (name === "salary") {
            if (value.length === 0) {
                setError({ ...error, salary: "@salary is Required" })
                setUser({ ...user, salary: "" })
            } else {
                setError({ ...error, salary: "" })
                setUser({ ...user, salary: value })
            }
        }
        if (name === "lastdate") {
            if (value.length === 0) {
                setError({ ...error, lastdate: "@lastdate is Required" })
                setUser({ ...user, lastdate: "" })
            } else {
                setError({ ...error, lastdate: "" })
                setUser({ ...user, lastdate: value })
            }
        }
        if (name === "category") {
            if (value.length === 0) {
                setError({ ...error, category: "@category is Required" })
                setUser({ ...user, category: "" })
            } else {
                setError({ ...error, category: "" })
                setUser({ ...user, category: value })
            }
        }
        if (name === "user") {
            setUser({ ...user, user: employer_id });
        }

    }


    

    const SubmitInfo = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        let formData = new FormData();
        if (Object.keys(ErrorList).length === 0) {
            formData.append("companyname", user.companyname);
            formData.append("description", user.description);
            formData.append("responsibility", user.responsibility);
            formData.append("skills", user.skills);
            formData.append("vacancy", user.vacancy);
            formData.append("location", user.location);
            formData.append("type", user.type);
            formData.append("lastdate", user.lastdate);
            formData.append("category", user.category);
            formData.append("salary", user.salary);
            formData.append("image", user.image);
            formData.append("user", employer_id);


            dispatch(FetchAddjobpost(formData))
            dispatch(FetchCategorysidebar());

            navigate('/post-job-list')
            toast("data Successfully added")

        }
    }



    return (
        <>


            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown"> ADD Job Detail</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Add Job Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">

                    <div className='resigter'>
                        <form onSubmit={SubmitInfo} className="form">
                            <div className="title">ADD JOB DESCTIPTION</div>


                            <div className='row'>
                                <div className='col-md-6 '>
                                    <label>Company Name </label>
                                    <input type="text" className="form-control" name="companyname" value={user.companyname} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.companyname} </span>
                                </div>
                                {/* <div className='col-md-6'>
                                    <label> Upload a Company Logo </label>
                                    <input style={{ padding: "30px 40px" }} type="file" className="form-control" name="image" value={user.image} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.image} </span>
                                </div>  */}

                                {/* <input
          name={image} 
          onChange={e => setimage(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input> */}

                                 {/* <div className='col-md-6'>
                                        <label className='form-label'>Image <span className='err-msg'>*</span></label>
                                        <input type="file" name="image" value={user.image} className='form-control' onChange={e => postUserData(e)}  required/>
                                    </div> */}

                      <div className='col-md-6'>
                                    <label> Upload a Company Logo </label>
                           <input type="file" className="form-control" name="image"   onChange={handleImageChange} />
                           
                            {error.image && <span style={{ color: "red", marginLeft: "24px" }}>{error.image}</span>}
                      </div>

                            </div>

                            <div>
                                <label>Job Description </label>
                                <input style={{ padding: "30px 40px" }} type="text" className="form-control" name="description" value={user.description} onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.description} </span>
                            </div>

                            <div>
                                <label> responsibility </label>
                                <input style={{ padding: "30px 40px" }} type="text" className="form-control" name="responsibility" value={user.responsibility} onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.responsibility} </span>
                            </div>

                            <div>
                                <label> skills </label>
                                <input type="text" className="form-control" name="skills" value={user.skills} onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.skills} </span>
                            </div>

                            {/* <div>
                                <label> Category </label>
                                <input type="text" className="form-control" name="category" value={user.category} onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.category} </span>
                            </div> */}


                            <div>
                                <label> Category type : </label>
                                <select name="category" value={user.category} onChange={e => postUserData(e)}>

                                    {categorysidebar_data?.data?.map((item, index) => {
                                        return (
                                            <>
                                                <option className="form-control" value={item._id} > {item.title}</option>

                                            </>
                                        )
                                    })
                                    }
                                </select>
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.category} </span>

                            </div>


                            <div className='row'>
                            <div className='col-md-6' style={{marginTop:"20px"}}>
                                <label>  type : </label>
                                <select name="type" value={user.type} onChange={e => postUserData(e)}>

                                                  <option className="form-control"> choose type</option>

                                                <option className="form-control" value="fulltime" > FULL TIME</option>
                                                <option className="form-control" value="parttime" > PART TIME</option>
                                                <option className="form-control" value="intern" > INTERN</option>
                                            
                                </select>
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.type} </span>

                            </div>


                                {/* <div className='col-md-6'>
                                    <label> Type </label>
                                    <input type="text" className="form-control" name="type" value={user.type} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.type} </span>

                                </div> */}
                                <div className='col-md-6'>
                                    <label> Vacency </label>
                                    <input type="text" className="form-control" name="vacancy" value={user.vacancy} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.vacancy} </span>

                                </div>
                            </div>

                            <div>
                                <label> location </label>
                                <input type="text" className="form-control" name="location" value={user.location} onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.location} </span>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <label> Salary </label>
                                    <input type="text" className="form-control" name="salary" value={user.salary} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.salary} </span>

                                </div>
                                <div className='col-md-6'>
                                    <label> Last date </label>
                                    <input type="date" className="form-control" name="lastdate" value={user.lastdate} onChange={e => postUserData(e)} />
                                    <span style={{ color: "red", marginLeft: "24px" }}> {error.lastdate} </span>

                                </div>
                            </div>


                            {/* <div class="mb-3">
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
                                        style={{ height: "180px" }}
                                        src={URL.createObjectURL(img)}
                                        alt=""
                                        className="upload-img"
                                    />
                                ) : (
                                    <>{img === "" && <p>Drag or drop content here</p>}</>
                                )}
                            </div> */}

                            <div>
                                <button type="submit" className="submit"> Add Job </button>
                                <br />
                                <Link to="/" className='btn submit'>Cancle</Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPostJob


// *************************************************************************************************************

















// import React, { useContext, useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { FetchAddjobpost } from '../../redux/slice/JobPostSlice'


// // import { FetchCategorysidebar } from '../../redux/slice/CategorySidebarSlice'



// const initialValue = {
//     companyname: "",
//     description: "",
//     responsibility: "",
//     skills: "",
//     vacancy: "",
//     location: "",
//     type: "",
//     salary: "",
//     lastdate: "",
//     // category: "",
//     // image: "",

// }




// const AddPostJob = () => {






//     const [user, setUser] = useState(initialValue)
//     const [error, setError] = useState({})
//     // const [img, setimg] = useState();

//     const navigate = useNavigate()
//     const dispatch = useDispatch()


//     // const { categorysidebar_data } = useSelector((state) => state?.categorysidebar)

//     // // useEffect(() => {
//     // //     dispatch((FetchCategorysidebar()))

//     // // }, [])
//     // console.log('c==>', categorysidebar_data);





//     // const validation = () => {

//     //     let error = {}
//     //     if (!user.companyname) {
//     //         error.companyname = "companyname is requerd"
//     //     }
//     //     if (!user.description) {
//     //         error.description = "description is requerd"
//     //     }


//     //     if (!user.responsibility) {
//     //         error.responsibility = "responsibility is requerd"
//     //     }

//     //     if (!user.skills) {
//     //         error.skills = "skills is requerd"
//     //     }
//     //     if (!user.vacancy) {
//     //         error.vacancy = "vacancy is requerd"
//     //     }

//     //     if (!user.location) {
//     //         error.location = "location is requerd"
//     //     }
//     //     if (!user.type) {
//     //         error.type = "type is requerd"
//     //     }
//     //     if (!user.salary) {
//     //         error.salary = "salary is requerd"
//     //     }
//     //     if (!user.lastdate) {
//     //         error.lastdate = "lastdate is requerd"
//     //     }
//     //     if (!user.category) {
//     //         error.category = "category is requerd"
//     //     }
//     //     // if (!user.image) {
//     //     //     error.image = "image is requerd"
//     //     // }

//     //     return error
//     // }

//     let name, value
//     const postUserData = (e) => {
//         name = e.target.name
//         value = e.target.value


//         setUser({ ...user, [name]: value })

//         // if (name === "companyname") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, companyname: "@companyname is Required" })
//         //         setUser({ ...user, companyname: "" })
//         //     } else {
//         //         setError({ ...error, companyname: "" })
//         //         setUser({ ...user, companyname: value })
//         //     }
//         // }

//         // if (name === "description") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, description: "@description is Required" })
//         //         setUser({ ...user, description: "" })
//         //     } else {
//         //         setError({ ...error, description: "" })
//         //         setUser({ ...user, description: value })
//         //     }
//         // }

//         // if (name === "responsibility") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, responsibility: "@responsibility is Required" })
//         //         setUser({ ...user, responsibility: "" })
//         //     } else {
//         //         setError({ ...error, responsibility: "" })
//         //         setUser({ ...user, responsibility: value })
//         //     }
//         // }

//         // if (name === "skills") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, skills: "@skills is Required" })
//         //         setUser({ ...user, skills: "" })
//         //     } else {
//         //         setError({ ...error, skills: "" })
//         //         setUser({ ...user, skills: value })
//         //     }
//         // }

//         // if (name === "vacancy") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, vacancy: "@vacancy is Required" })
//         //         setUser({ ...user, vacancy: "" })
//         //     } else {
//         //         setError({ ...error, vacancy: "" })
//         //         setUser({ ...user, vacancy: value })
//         //     }
//         // }

//         // if (name === "location") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, location: "@location is Required" })
//         //         setUser({ ...user, location: "" })
//         //     } else {
//         //         setError({ ...error, location: "" })
//         //         setUser({ ...user, location: value })
//         //     }
//         // }
//         // if (name === "type") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, type: "@type is Required" })
//         //         setUser({ ...user, type: "" })
//         //     } else {
//         //         setError({ ...error, type: "" })
//         //         setUser({ ...user, type: value })
//         //     }
//         // }
//         // if (name === "salary") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, salary: "@salary is Required" })
//         //         setUser({ ...user, salary: "" })
//         //     } else {
//         //         setError({ ...error, salary: "" })
//         //         setUser({ ...user, salary: value })
//         //     }
//         // }
//         // if (name === "lastdate") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, lastdate: "@lastdate is Required" })
//         //         setUser({ ...user, lastdate: "" })
//         //     } else {
//         //         setError({ ...error, lastdate: "" })
//         //         setUser({ ...user, lastdate: value })
//         //     }
//         // }
//         // if (name === "category") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, category: "@category is Required" })
//         //         setUser({ ...user, category: "" })
//         //     } else {
//         //         setError({ ...error, category: "" })
//         //         setUser({ ...user, category: value })
//         //     }
//         // }
//         // if (name === "image") {
//         //     if (value.length === 0) {
//         //         setError({ ...error, image: "@image is Required" })
//         //         setUser({ ...user, image: "" })
//         //     } else {
//         //         setError({ ...error, image: "" })
//         //         setUser({ ...user, image: value })
//         //     }
//         // }

//     }


//     // const SubmitInfo = async (e) => {
//     //     e.preventDefault()
//     //     let ErrorList = validation()
//     //     setError(ErrorList)
//     //     if (Object.keys(ErrorList).length === 0) {
//     //         dispatch(FetchAddjobpost(user));
//     //         dispatch(FetchCategorysidebar());
//     //         navigate('/post-job-list')
//     //         toast("data Successfully added")
//     //     }
//     // }

//     const SubmitInfo = async (e) => {
//         e.preventDefault()
    
//         // setError(validation())
//         let formData = new FormData();
//             formData.append("companyname", user.companyname);
//             formData.append("description", user.description);
//             formData.append("responsibility", user.responsibility);
//             formData.append("skills", user.skills);
//             formData.append("vacancy", user.vacancy);
//             formData.append("location", user.location);
//             formData.append("type", user.type);
//             formData.append("lastdate", user.lastdate);
//             // formData.append("category", user.category);
//             // formData.append("image", user.image);
//             // formData.append("image", img);


//             dispatch(FetchAddjobpost(formData))
//             // dispatch(FetchCategorysidebar());

//             navigate('/post-job-list')
//             toast("data Successfully added")

        
//     }

//     // useEffect(() => {
//     //     dispatch((FetchCategorysidebar()))

//     // }, [])

//     return (
//         <>


//             <div className="container-xxl py-5 bg-dark page-header mb-5">
//                 <div className="container my-5 pt-5 pb-4">
//                     <h1 className="display-3 text-white mb-3 animated slideInDown"> ADD Job Detail</h1>
//                     <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb text-uppercase">
//                             <li className="breadcrumb-item"><a href="#">Home</a></li>
//                             <li className="breadcrumb-item"><a href="#">Pages</a></li>
//                             <li className="breadcrumb-item text-white active" aria-current="page">Add Job Detail</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//                 <div className="container">

//                     <div className='resigter'>
//                         <form className="form">
//                             <div className="title">ADD JOB DESCTIPTION</div>


//                             <div className='row'>
//                                 <div className='col-md-6 '>
//                                     <label>Company Name </label>
//                                     <input type="text" className="form-control" name="companyname" value={user.companyname} onChange={postUserData} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.companyname} </span>
//                                 </div>
//                                 {/* <div className='col-md-6'>
//                                     <label> Upload a Company Logo </label>
//                                     <input style={{ padding: "30px 40px" }} type="file" className="form-control" name="image" value={user.image} onChange={e => postUserData(e)} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.image} </span>
//                                 </div>  */}

//                                 {/* <input
//           name={image} 
//           onChange={e => setimage(e.target.files[0])} 
//           type="file" 
//           accept="image/*"
//         ></input> */}

//                                  {/* <div className='col-md-6'>
//                                         <label className='form-label'>Image <span className='err-msg'>*</span></label>
//                                         <input type="file" name="image" value={user.image} className='form-control' onChange={e => postUserData(e)}  required/>
//                                     </div> */}


//                             </div>

//                             <div>
//                                 <label>Job Description </label>
//                                 <input style={{ padding: "30px 40px" }} type="text" className="form-control" name="description" value={user.description} onChange={postUserData}/>
//                                 <span style={{ color: "red", marginLeft: "24px" }}> {error.description} </span>
//                             </div>

//                             <div>
//                                 <label> responsibility </label>
//                                 <input style={{ padding: "30px 40px" }} type="text" className="form-control" name="responsibility" value={user.responsibility} onChange={postUserData} />
//                                 <span style={{ color: "red", marginLeft: "24px" }}> {error.responsibility} </span>
//                             </div>

//                             <div>
//                                 <label> skills </label>
//                                 <input type="text" className="form-control" name="skills" value={user.skills} onChange={postUserData} />
//                                 <span style={{ color: "red", marginLeft: "24px" }}> {error.skills} </span>
//                             </div>

//                             {/* <div>
//                                 <label> Category </label>
//                                 <input type="text" className="form-control" name="category" value={user.category} onChange={e => postUserData(e)} />
//                                 <span style={{ color: "red", marginLeft: "24px" }}> {error.category} </span>
//                             </div> */}


//                             {/* <div>
//                                 <label> Category type : </label>
//                                 <select name="category" value={user.category} onChange={postUserData}>

//                                     {categorysidebar_data?.data?.map((item, index) => {
//                                         return (
//                                             <>
//                                                 <option className="form-control" value={item._id} > {item.title}</option>

//                                             </>
//                                         )
//                                     })
//                                     }
//                                 </select>
//                             </div> */}


//                             <div className='row'>
//                                 <div className='col-md-6'>
//                                     <label> Type </label>
//                                     <input type="text" className="form-control" name="type" value={user.type} onChange={postUserData} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.type} </span>

//                                 </div>
//                                 <div className='col-md-6'>
//                                     <label> Vacency </label>
//                                     <input type="text" className="form-control" name="vacancy" value={user.vacancy} onChange={postUserData} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.vacancy} </span>

//                                 </div>
//                             </div>

//                             <div>
//                                 <label> location </label>
//                                 <input type="text" className="form-control" name="location" value={user.location} onChange={postUserData} />
//                                 <span style={{ color: "red", marginLeft: "24px" }}> {error.location} </span>
//                             </div>

//                             <div className='row'>
//                                 <div className='col-md-6'>
//                                     <label> Salary </label>
//                                     <input type="text" className="form-control" name="salary" value={user.salary} onChange={postUserData} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.salary} </span>

//                                 </div>
//                                 <div className='col-md-6'>
//                                     <label> Last date </label>
//                                     <input type="date" className="form-control" name="lastdate" value={user.lastdate} onChange={postUserData} />
//                                     <span style={{ color: "red", marginLeft: "24px" }}> {error.lastdate} </span>

//                                 </div>
//                             </div>


//                             {/* <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">
//                                     Image
//                                 </label>
//                                 <input
//                                     type="file"
//                                     onChange={(e) => setimg(e.target.files[0])}
//                                     name="img"
//                                     accept="image/*"
//                                     class="form-control"
//                                 />
//                                 {img !== "" && img !== undefined && img !== null ? (
//                                     <img
//                                         style={{ height: "180px" }}
//                                         src={URL.createObjectURL(img)}
//                                         alt=""
//                                         className="upload-img"
//                                     />
//                                 ) : (
//                                     <>{img === "" && <p>Drag or drop content here</p>}</>
//                                 )}
//                             </div> */}

//                             <div>
//                                 {/* <button type="submit" className="submit"> Add Job </button> */}
//                                 <button  onClick={SubmitInfo} type="submit" class="btn btn-success">Create</button>

//                                 <br />
//                                 <Link to="/" className='btn submit'>Cancle</Link>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AddPostJob





