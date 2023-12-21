import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchDelete, FetchEmployerDashboard } from '../redux/slice/Employer_DashboardSlice';
import { imageUrl } from '../api/ImageUrl';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const EmployerDashboard = () => {


    const  id  = localStorage.getItem("id");


    const{employerdashboard_data}=useSelector((state)=>state?.employerdashboard )
    
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch((FetchEmployerDashboard(id)))
     
    },[id])
    console.log('employerdashboard',employerdashboard_data);
    
  
    const deleteUserData=async(id)=>{
      await FetchDelete(id)
      dispatch(FetchEmployerDashboard())
      
      toast.error('delete successfully')
          
      }




    
  
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
        <img src={`${imageUrl}/${image}`} height={"200px"}/>
        <h2 className="text-primary me-3" >{name}</h2>
        <h4 className="text-primary me-3" >{email}</h4>
        <h4 className="text-primary me-3" >{phone}</h4>
          
        </div>
        <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">Your Post JOB list:</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          {
    employerdashboard_data?.data?.map((item)=>{
        return(
            <>

            
            <div className="job-item p-4 mb-4">
                              <div className="row g-4">
                                <div className="col-sm-12 col-md-7 d-flex align-items-center">
                                  <img className="flex-shrink-0 img-fluid border rounded" src={`${imageUrl}/${item.image}`}     alt style={{ width: 80, height: 80 }} />

                                  <div className="text-start ps-4">
                                    <h5 className="mb-3">{item.category[0]?.title}</h5>
                                    <p className="text-truncate me-3">{item.companyname}</p>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />{item.location}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />{item.type}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />{item.salary}</span>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-5 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                  <div className="d-flex mb-3">
                            <div className='me-3'>
                             {item.isPending === false ? (
              <div>
  <h5><span style={{color: 'green'}}>✔</span>Approved</h5>
  </div>
     ) 
              : (
               <div>
  <h5> <span style={{color: 'rgb(233, 14, 14)'}}>↻</span>Pending</h5>
</div>

                )}
                
                  </div>         
                                  <h4 className="" href>total applicant:<span className='text-primary' >{item.apply?.length}</span></h4>

                                  </div>
                                  <td><Link onClick={() => deleteUserData(item._id)} className='btn btn-danger'>Delete</Link></td> 

                                </div>
                              </div>
                            </div>






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

export default EmployerDashboard