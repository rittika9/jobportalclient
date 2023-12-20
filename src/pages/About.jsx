import React from 'react'

const About = () => {
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
      <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="row g-0 about-bg rounded overflow-hidden">
            <div className="col-6 text-start">
              <img className="img-fluid w-100" src="img/about-1.jpg" />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid" src="img/about-2.jpg" style={{width: '85%', marginTop: '15%'}} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid" src="img/about-3.jpg" style={{width: '85%'}} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid w-100" src="img/about-4.jpg" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <p><i className="fa fa-check text-primary me-3" />Tempor erat elitr rebum at clita</p>
          <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
          <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
          <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a>
        </div>
      </div>
    </div>
    </div>


{/* ************** */}
<div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="row g-0 about-bg rounded overflow-hidden">
            {/* <div className="col-6 text-start">
              <img className="img-fluid w-100" src="img/about-1.jpg" />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid" src="img/about-2.jpg" style={{width: '85%', marginTop: '15%'}} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid" src="img/about-3.jpg" style={{width: '85%'}} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid w-100" src="img/about-4.jpg" />
            </div> */}
                      <h1 className="mb-4 text-primary" >We've been helping customer globally...</h1>

          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h2 className="mb-4">Who we are?</h2>
          <p className="mb-4">Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <h2 className="mb-4">What's our gole?</h2>
          <p><i className=" me-3" />Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <h2 className="mb-4">Our vision?</h2>
          <p><i className=" me-3" />Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    </div>
{/* ********** */}





  {/* About End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

    
    
    
    
    </>
  )
}

export default About