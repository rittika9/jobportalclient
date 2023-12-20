import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchJobFindDetails } from '../redux/slice/JobFindDetailsSlice'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import { imageUrl } from '../api/ImageUrl';



const Job_Detail = () => {


  const { id } = useParams()
  const{jobFindDetails_data}=useSelector((state)=>state?.jobfinddetails
      
     )

    
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(FetchJobFindDetails(id))
            },[])

  //     useEffect(() => {
  //       id !== '' && id !== null && id !== undefined ? dispatch(FetchCategoryDetails(id)) : dispatch(FetchBlog())
  //   }, [id])

    
    console.log('cd',jobFindDetails_data);







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
      <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Job Detail Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row gy-5 gx-4">
        <div className="col-lg-8">
          <div className="d-flex align-items-center mb-5">
            <img className="flex-shrink-0 img-fluid border rounded" src={`${imageUrl}/${jobFindDetails_data?.image}`}  alt style={{width: 80, height: 80}} />
            <div className="text-start ps-4">
              <h3 className="mb-3">{jobFindDetails_data?.category?.[0].title}</h3>
              <h4 className="mb-3 text-info">{jobFindDetails_data?.companyname}</h4>

              <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{jobFindDetails_data?.location}</span>
              <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{jobFindDetails_data?.type}</span>
              <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{jobFindDetails_data?.salary}</span>
            </div>
          </div>
          <div className="mb-5">
            <h4 className="mb-3">description</h4>
            <p>{jobFindDetails_data?.description}</p>
            <h4 className="mb-3">Responsibility</h4>
            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
            <ul className="list-unstyled">
              <li><i className="fa fa-angle-right text-primary me-2" />{jobFindDetails_data?.responsibility}</li>
              {/* <li><i className="fa fa-angle-right text-primary me-2" />Elitr stet dolor vero clita labore gubergren</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Rebum vero dolores dolores elitr</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Est voluptua et sanctus at sanctus erat</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Diam diam stet erat no est est</li> */}
            </ul>
            <h4 className="mb-3">Qualifications</h4>
            <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
            <ul className="list-unstyled">
              <li><i className="fa fa-angle-right text-primary me-2" />{jobFindDetails_data?.skills}</li>
              {/* <li><i className="fa fa-angle-right text-primary me-2" />Elitr stet dolor vero clita labore gubergren</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Rebum vero dolores dolores elitr</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Est voluptua et sanctus at sanctus erat</li>
              <li><i className="fa fa-angle-right text-primary me-2" />Diam diam stet erat no est est</li> */}
            </ul>
          </div>

{/* ************* */}
<div>
{/* <button className="btn btn-primary w-45" type="submit">Apply Now</button> */}
<a href={`/apply/${id}`} className='btn btn-primary w-45'type="submit">Apply Now</a>
</div>
{/* ************** */}






          {/* <div className>
            <h4 className="mb-4">Apply For The Job</h4>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control" placeholder="Portfolio Website" />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="file" className="form-control bg-white" />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows={5} placeholder="Coverletter" defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                </div>
              </div>
            </form>
          </div> */}

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
  {/* Job Detail End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

    
    
    </>
  )
}

export default Job_Detail