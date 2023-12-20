import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchjobFind } from '../redux/slice/JobFindSlice'
import moment from 'moment';
import CategorySidebar from './CategorySidebar';
import FullTime from './type/FullTime';
import { imageUrl } from '../api/ImageUrl';
// import {slice, concat, } from 'lodash';








const JobList = () => {



  const [visible, setVisible] = useState(3)

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3)
  }


  const { jobfind_data } = useSelector((state) => state?.jobfind)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchjobFind())
  }, [dispatch])

  console.log("jobpost", jobfind_data)




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
            <h1 className="display-3 text-white mb-3 animated slideInDown">Job List</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Job List</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Header End */}
        {/* Jobs Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <h6 className="mt-n1 mb-0">All</h6>
                  </a>
                </li>


                {/* <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="/fulltime">
                    <h6 className="mt-n1 mb-0">Full Time</h6>
                  </a>
                </li> */}


                <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3"  href="/fulltime" ><h6 className="mt-n1 mb-0">Full Time</h6></a>
               </li>

                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3"  href="/parttime">
                    <h6 className="mt-n1 mb-0">Part Time</h6>
                  </a>
                </li>
              </ul>


  {/* &****************************** */}
              <div className='row'>
                {/* <div className='col-sm-2'>
                  <h5>category</h5>

                  {
                  jobfind_data?.data?.data?.map((item, index) => {
                    return(
                    <>
                                 <li><i className="fa fa-angle-right text-primary me-2" /><a href='' className="mb-3">{item.category[0]?.title}</a></li> 

                    <br/>
                    </>
                    )
                  })
                  }

                </div> */}
<CategorySidebar/>

                <div className='col-md-10'>
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">

                      {jobfind_data?.data?.data?.slice(0, visible).map((item, index) => {
                        return (
                          <>


                            <div className="job-item p-4 mb-4">
                              <div className="row g-4">
                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                  {/* <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt style={{width: 80, height: 80}} /> */}
                                  <img className="flex-shrink-0 img-fluid border rounded" src={`${imageUrl}/${item.image}`} alt style={{ width: 80, height: 80 }} />

                                  <div className="text-start ps-4">
                                    <h5 className="mb-3">{item.category[0]?.title}</h5>
                                    <p className="text-truncate me-3">{item.companyname}</p>

                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{item.location}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{item.type}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{item.salary}</span>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                  <div className="d-flex mb-3">
                                    {/* <a className="btn btn-light btn-square me-3" href><i className="far fa-heart text-primary" /></a> */}
                                    <a className="btn btn-light btn-square me-3" href><i class="fas fa-save text-primary"></i></a>
                                    <a className="btn btn-primary" href={`/job-detail/${item._id}`} >Apply Now</a>
                                  </div>
                                  <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />Date Line:{moment(item?.lastdate).format('L')} </small>
                                </div>
                              </div>
                            </div>

                          </>
                        )
                      }
                      )
                      }
                      {/* <a className="btn btn-primary py-3 px-5" href>Browse More Jobs</a> */}
                      <button onClick={showMoreItems} className="btn btn-primary py-3 px-5">Browse More Jobs</button>


                    </div>

                  </div>
                </div>
              </div>
   {/*&&&&& **************************** */}



                {/* ****************************** */}
{/* 
              <div className="tab-content">

                <div id="tab-1" className="tab-pane fade show p-0 active">

                  {jobfind_data?.data?.data?.slice(0, visible).map((item, index) => {
                    return (
                      <>


                        <div className="job-item p-4 mb-4">
                          <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                              <img className="flex-shrink-0 img-fluid border rounded" src={`http://localhost:9900/${item.image}`} alt style={{ width: 80, height: 80 }} />

                              <div className="text-start ps-4">
                                <h5 className="mb-3">{item.category[0]?.title}</h5>
                                <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{item.location}</span>
                                <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{item.type}</span>
                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{item.salary}</span>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div className="d-flex mb-3">
                                <a className="btn btn-light btn-square me-3" href><i class="fas fa-save text-primary"></i></a>
                                <a className="btn btn-primary" href={`/job-detail/${item._id}`} >Apply Now</a>
                              </div>
                              <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2" />Date Line:{moment(item?.lastdate).format('L')} </small>
                            </div>
                          </div>
                        </div>

                      </>
                    )
                  }
                  )
                  }
                  <button onClick={showMoreItems} className="btn btn-primary py-3 px-5">Browse More Jobs</button>


                </div>
              </div> */}
       {/* **************************** */}

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
  )
}

export default JobList