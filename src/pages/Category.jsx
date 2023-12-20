import React, { useEffect } from 'react'
import { FetchCategory } from '../redux/slice/CategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../api/ImageUrl'

const Category = () => {

  const{category_data}=useSelector((state)=>state?.category )
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch((FetchCategory()))
   
  },[])
  console.log('c',category_data);
  
    



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
      <h1 className="display-3 text-white mb-3 animated slideInDown">Category</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Category</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Category Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
      <div className="row g-4">


      {
    category_data?.data?.map((c,index)=>{
        return(
            <>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="cat-item rounded p-4" href>
            {/* <i className="fa fa-3x fa-mail-bulk text-primary mb-4" /> */}
<img src={`${imageUrl}/${c.image}`} className=' w-100 h-100' alt="" />

            <div className='row'>
              <div className='col col-md-8'>
              <h6 className="mb-3">{c.title}</h6>
              </div>
              <div className='col col-md-4'>
              <a className="btn btn-light btn-square me-3" href={`http://localhost:9900/api/like/${c._id}`}><i className="far fa-heart text-primary" />{c?.like} </a>
              </div>
            </div>
            {/* <h6 className="mb-3">{c.title}</h6> */}
            <p className="mb-0">{c.content.slice(0, 100)}</p>
            {/* <p className="mb-0">123 Vacancy</p> */}

            <a href={`/categorydetails/${c._id}`} className="mb-0">Continue Reading.....</a>

            {/* <a className="btn btn-light btn-square me-3" href={`http://localhost:9900/api/like/${c._id}`}><i className="far fa-heart text-primary" />{c?.like} </a> */}

          </a>
        </div>
</>
        )
      }   )
}








        {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-headset text-primary mb-4" />
            <h6 className="mb-3">Customer Service</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-user-tie text-primary mb-4" />
            <h6 className="mb-3">Human Resource</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-tasks text-primary mb-4" />
            <h6 className="mb-3">Project Management</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-chart-line text-primary mb-4" />
            <h6 className="mb-3">Business Development</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-hands-helping text-primary mb-4" />
            <h6 className="mb-3">Sales &amp; Communication</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-book-reader text-primary mb-4" />
            <h6 className="mb-3">Teaching &amp; Education</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <a className="cat-item rounded p-4" href>
            <i className="fa fa-3x fa-drafting-compass text-primary mb-4" />
            <h6 className="mb-3">Design &amp; Creative</h6>
            <p className="mb-0">123 Vacancy</p>
          </a>
        </div> */}
      </div>
    </div>
  </div>
  {/* Category End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>



 

    
    
    
    </>
  )
}

export default Category