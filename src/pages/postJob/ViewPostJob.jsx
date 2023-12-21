 

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Fetchjobpost } from '../../redux/slice/JobPostSlice'
import { imageUrl } from '../../api/ImageUrl'






const ViewPostJob = () => {

  const {jobpost_data}=useSelector((state)=>state?.jobpost)
  const dispatch=useDispatch()
  const role = localStorage.getItem("isAdmin");


  useEffect(()=>{
dispatch(Fetchjobpost())
  },[dispatch])

      console.log("jobpost",jobpost_data)

// const deleteUserData=async(id)=>{
// await FetchDetete(id)
// dispatch(Fetchjobpost())

// toast.error('delete successfully')
    
// }






      if (role === "user") {
        return (
          <>
            <div style={{ margin: "130px" }}>
              <h1 style={{color:"red", textAlign:"center"}}>You are not an EMPLOYER....</h1>
                          {/* <p style={{textAlign:"center",color:"#800000"}}>if you are an employer... <Link to='/loginemployer' >login here</Link></p>   */}


            </div>
          </>
        );
      }else{


        // if (jobpost_data?.data?.data?.isPending===false)  {
        //   return (
        //     <>
        //     <div>
        //       {jobpost_data?.data?.data?.isPending ? (
        //         <p>Welcome back!</p>
        //       ) : (
        //         <p>Please log in to continue.</p>
        //       )}
        //     </div>
        //     </>
        //   );
        // }


        

  return (
    <>
    
    <div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
 
  {/* Navbar End */}
  {/* Header End */}
  <div className="container-xxl py-5 bg-dark page-header mb-5">
    <div className="container my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Job Post List</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Job post List</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Jobs Start */}
  
  <div className="container-xxl py-5">
    <div className="container">
        <h1>Add some more information</h1>
    <div>
{/* <button className="btn btn-primary w-45" type="submit">Apply Now</button> */}
<a href='/add-post-job' className='btn btn-primary w-45'type="submit">Add Job</a>
</div>
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job post List</h1>
      <div className="row g-4">
        
{/* ************************************** */}
{jobpost_data?.data?.data?.map((item,index)=>{
        return(
            <>
<div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="cat-item rounded p-4" href>
            {/* <i className="fa fa-3x fa-mail-bulk text-primary mb-4" /> */}
            <img src={`${imageUrl}/${item.image}`}    style={{height:"80px"}} alt="" />

            <div className="text-start ps-4">
              <h3 className="mb-3">{item.category[0]?.title}</h3>
              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{item.location}</span>
              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{item.type}</span>
              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{item.salary}</span>
            </div>

            <h6 className="mb-3">{item.companyname}</h6>
            <p className="mb-0">{item.description}</p>
            {/* <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /> 13</a> */}

            {item.isPending === false ? (
              <div>
  <h4><span style={{color: 'green'}}>✔</span>Approved</h4>
  <h6> Congratulations! on this new opportunity is confirmed.
  </h6></div>
     ) 
              : (
               <div>
  <h4> <span style={{color: 'rgb(233, 14, 14)'}}>↻</span>Pending</h4>
  <h6>please wait a few days..... </h6>
</div>

                )}

{/* <td><Link onClick={() => deleteUserData(item._id)} className='btn btn-danger'>Delete</Link></td>  */}

          </a>
        </div>

</>
        )
})
      }
{/* ************************************** */}





        {/* <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-headset text-primary mb-4" />
            <h6 className="mb-3">Customer Service</h6>
            <p className="mb-0">123 Vacancy</p>
            <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /> 13</a>

          </a>
        </div> */}
       
      </div>
    </div>
  </div>


  {/* Jobs End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
    
    
    
    
    
    
    </>
  )}
}

export default ViewPostJob