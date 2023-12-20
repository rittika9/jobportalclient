import React from 'react'

const Contact = () => {
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
      <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45, height: 45}}>
                  <i className="fa fa-map-marker-alt text-primary" />
                </div>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45, height: 45}}>
                  <i className="fa fa-envelope-open text-primary" />
                </div>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45, height: 45}}>
                  <i className="fa fa-phone-alt text-primary" />
                </div>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 400, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 150}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

    
    
    
    </>
  )
}

export default Contact