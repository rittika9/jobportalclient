// import React from 'react'
// import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import Home from '../pages/Home'
// import Navbar from '../component/common/Navbar'
// import Footer from '../component/common/Footer'
// import About from '../pages/About'
// import JobList from '../pages/JobList'
// import Job_Detail from '../pages/Job_Detail'
// import Category from '../pages/Category'
// import Testimonial from '../pages/Testimonial'
// import Contact from '../pages/Contact'
// import ErrorPage from '../pages/ErrorPage'
// import ApplyNow from '../pages/ApplyNow'
// import ViewPostJob from '../pages/postJob/ViewPostJob'
// import AddPostJob from '../pages/postJob/AddPostJob'
// import CategoryDetails from '../pages/CategoryDetails'
// import CategorySidebar from '../pages/CategorySidebar'
// import CategoryJoblist from '../pages/CategoryJoblist'
// import UserDashboard from '../pages/UserDashboard'
// import CandidateLogin from '../pages/auth/CandidateLogin'
// import EmployerLogin from '../pages/auth/EmployerLogin'
// import Register from '../pages/auth/Register'


// const App_route = () => {
//   return (
//     <>
    
    
//     <Router>
//         <Navbar/>
//         <Routes>
//         <Route path='/register' element={<Register/>}/> 
//         <Route path='/login' element={<CandidateLogin/>}/> 
//         <Route path='/employerlogin' element={<EmployerLogin/>}/> 



//             <Route path='/' element={<Home/>}/>
//              <Route path='/about' element={<About/>}/>
//              <Route path='/job-list' element={<JobList/>}/>
//              <Route path='/job-detail/:id' element={<Job_Detail/>}/>
//              <Route path='/apply/:title/:id' element={<ApplyNow/>}/>
//              <Route path='/category' element={<Category/>}/>
//              <Route path='/categorydetails/:id' element={<CategoryDetails/>}/>
//              <Route path='/categorysidebar' element={<CategorySidebar/>}/>
//              <Route path='/categoryjoblist/:id' element={<CategoryJoblist/>}/>
//              <Route path='/testimonial' element={<Testimonial/>}/>
//              <Route path='/404' element={<ErrorPage/>}/>
//             <Route path='/contact' element={<Contact/>}/> 
//             <Route path='/post-job-list' element={<ViewPostJob/>}/> 
//             <Route path='/add-post-job' element={<AddPostJob/>}/> 
//             <Route path='/user-dashboard' element={<UserDashboard/>}/> 



//         </Routes>
//         <Footer/>
//     </Router>
    
    
    
    
    
    
//     </>
//   )
// }

// export default App_route




import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { check_token } from '../redux/slice/UserAuthSlice';
import Home from '../pages/Home'
import About from '../pages/About'
import JobList from '../pages/JobList'
import Job_Detail from '../pages/Job_Detail'
import Category from '../pages/Category'
import Contact from '../pages/Contact'
import ApplyNow from '../pages/ApplyNow'
import ViewPostJob from '../pages/postJob/ViewPostJob'
import AddPostJob from '../pages/postJob/AddPostJob'
import CategoryDetails from '../pages/CategoryDetails'
import CategorySidebar from '../pages/CategorySidebar'
import CategoryJoblist from '../pages/CategoryJoblist'
import UserDashboard from '../pages/UserDashboard'
import Navbar from '../component/common/Navbar'
import Footer from '../component/common/Footer'
import Register from '../pages/auth/Register';
import LoginCandidate from '../pages/auth/LoginCandidate';
import EmployerLogin from '../pages/auth/EmployerLogin';
import EmployerDashboard from '../pages/EmployerDashboard';
import FullTime from '../pages/type/FullTime';
import PartTime from '../pages/type/PartTime';
// import CandidateLogin from '../pages/auth/CandidateLogin';




const App_route = () => {
  const dispatch = useDispatch();
  //check token avable or not
  function PrivateRoute({ children }) {
    const token =localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  //for Public Route
  const PublicRouteNames = [
    {
      path: "/login",
      Component: <LoginCandidate />
    },
    {
      path: "/loginemployer",
      Component: <EmployerLogin />
    },
    {

      path: "/register",
      Component: <Register />
    },
    {
      path: '/',
      Component: <Home/>
    },
    {
      path: '/about',
      Component: <About/>
    },
  ]
//for Private Route
  const PrivateRouteNames = [
    {
      path: '/job-list',
      Component: <JobList/>
    },

    {
      path: '/job-detail/:id',
      Component: <Job_Detail/>
    },
    {
      path: '/fulltime',
      Component: <FullTime/>
    },
    {
      path: '/parttime',
      Component: <PartTime/>
    },
    {
      path: '/apply/:id',
      Component: <ApplyNow/>
    },

    {path:'/category',
     Component:<Category/>
    },
    
    {

      path: '/categorydetails/:id',
      Component: <CategoryDetails/>
    },
    
    {
      path: '/categorysidebar',
      Component: <CategorySidebar/>
    },
    
    {
      path: '/categoryjoblist/:id',
      Component: <CategoryJoblist/>
    },
    
    {
      path: '/contact',
      Component: <Contact/>
    },
    
    {
      path: '/post-job-list',
      Component: <ViewPostJob/>
    },
    
    {
      path: '/add-post-job',
      Component: <AddPostJob/>
    },
    
    {
      path: '/user-dashboard',
      Component: <UserDashboard/>
    },
    
    {
      path: '/employer-dashboard',
      Component: <EmployerDashboard/>
    },
    
  ]


  useEffect(() => {
   dispatch(check_token())
  }, [])
  return (
    <>
     <Router>
          <Navbar/>
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  Key={index + 1}
                  exact
                  path={route.path}
                  element={route?.Component}
                />
              )
            })}

            {/* Protect Route */}
            {PrivateRouteNames?.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
           
          </Routes>
          <Footer/>
        </Router>
    
    </>
  )
}

export default App_route