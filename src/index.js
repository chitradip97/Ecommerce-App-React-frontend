import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// admin layout
import Footer from './layout/admin_layout/Footer'
import Master_layout from './layout/admin_layout/Master_layout';
import Navbar from './layout/admin_layout/Navbar';
import Sidebar from './layout/admin_layout/Sidebar';

//admin pages
import Dashboard from './pages/admin_pages/Dashboard';
import Profile from './pages/admin_pages/Profile';

// Auth pages
import Registration from './pages/Auth_pages/Registration';
import User_login from './pages/Auth_pages/User_login';
import Admin_login from './pages/Auth_pages/Admin_login';


// user layout
import User_master_layout from './layout/user_layout/User_master_layout';


// user Pages
import Home from './pages/user_pages/Home';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      {/* <Route path='user' element={<User_master_layout/>}> */}
      <Route index element={<Home/>}/>
      <Route path='Registration' element={<Registration/>}/>
      <Route path='User_login' element={<User_login/>}/>
      <Route path='Admin_login' element={<Admin_login/>}/>
      {/* </Route> */}
      
      
      <Route path='admin' element={<Master_layout/>}>
        <Route path='/admin/Dashboard'  element={<Dashboard/>}/>
        <Route path='/admin/Profile'  element={<Profile/>}/>
      </Route>

    </Route>

  )
) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
