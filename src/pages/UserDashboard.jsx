import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserDashboard } from '../redux/slice/User_DashboardSlice'
import { useParams } from 'react-router-dom'
import { imageUrl } from '../api/ImageUrl'

const UserDashboard = () => {
  const  id  = localStorage.getItem("id");


  const{userdashboard_data}=useSelector((state)=>state?.userdashboard )
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch((FetchUserDashboard(id)))
   
  },[id])
  console.log('userdashboard',userdashboard_data);
  


  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const image = localStorage.getItem("image");


  return (
    <>



<div className="container-xxl py-5" style={{border: "inset",borderWidth: "100px"}}>
    <div className="container" >
      <div className="row g-5"style={{marginLeft:"60px"}}>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <img src={`${imageUrl}/${image}`}  height={"200px"}/>

        <h4 className="text-primary me-3" >NAME:<span>{name}</span></h4>
        <h5 className="text-primary me-3" >EMAIL:{email}</h5>
        <h5 className="text-primary me-3" >PHONE NO.:{phone}</h5>

          
        </div>
        <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">Your Application list: </h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          {
    userdashboard_data?.data?.map((item)=>{
        return(
            <>
            {/* <div className='row'>
              <div className='col-md-4'>
              <img src={`http://localhost:9900/${item.job.image}`} height={"100px"}/>

              </div>
              <div className='col-md-4'>
              <h3>{item.job.companyname}</h3>
               </div>
            </div> */}
            

            <div className="job-item p-4 mb-4">
                              <div className="row g-4">
                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                  {/* <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt style={{width: 80, height: 80}} /> */}
                                  <img className="flex-shrink-0 img-fluid border rounded" src={`${imageUrl}/${item.job.image}`}   alt style={{ width: 80, height: 80 }} />

                                  <div className="text-start ps-4">
                                    <h5 className="mb-3">{item.category?.title}</h5>
                                    <p className="text-truncate me-3">{item.job.companyname}</p>

                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{item.job.location}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{item.job.type}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{item.job?.salary}</span>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                  <div className="d-flex mb-3">
                                    {/* <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /></a> */}
                                    {/* <a className="btn btn-light btn-square me-3" href><i class="fas fa-save text-primary"></i></a> */}
                                    {/* <a className="btn btn-primary" href={`/job-detail/${item._id}`} >Apply Now</a> */}
                                  </div>
                                  {/* <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />Date Line:{moment(item?.lastdate).format('L')} </small> */}
                                </div>
                              </div>
                            </div>

{/* <h3>{c?.job._id}</h3> */}

            </>
            )
            })
            }
          {/* <p><i className="fa fa-check text-primary me-3" />{}</p>
          <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
          <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
          <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a> */}
        </div>
      </div>
    </div>
    </div>


    </>
  )
}

export default UserDashboard