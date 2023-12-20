import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCategorysidebar } from '../redux/slice/CategorySidebarSlice'
const CategorySidebar = () => {

    const{categorysidebar_data}=useSelector((state)=>state?.categorysidebar )
  
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch((FetchCategorysidebar()))
     
    },[])
    console.log('c',categorysidebar_data);
    
      
  
  


  return (
    <>
    
    
    <div className='col-sm-2'>
                  <h5>category</h5>

                  {
                categorysidebar_data?.data?.map((item, index) => {
                    return(
                    <>
                             <ul className="list-unstyled">
                               <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">

                                 <li><i className="fa fa-angle-right text-primary me-2  active{background:red;}" /><a href= {`/categoryjoblist/${item._id}`} className="mb-3">{item.title}</a></li> 
                                
                    <br/>
                    </div>
                    </ul> 
                    </>
                    )
                  })
                  }

                </div>
    
    
    

               
    
    
    </>
  )
}

export default CategorySidebar