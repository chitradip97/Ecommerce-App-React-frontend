import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// pages
import Footer from './pages/admin_pages/Footer';
import Master_layout from './pages/admin_pages/Master_layout';
import Navbar from './pages/admin_pages/Navbar';
import Sidebar from './pages/admin_pages/Sidebar';
import Dashboard from './components/admin_com/Dashboard';
import Profile from './components/admin_com/Profile'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/admin/' element={<App/>}>
      {/* <Route index element={<Master_layout/>}/>
      <Route path='Navber' element={<Navbar/>}/>
      <Route path='Sidebar' element={<Sidebar/>}/>
      <Route path='Footer' element={<Footer/>}/> */}
      <Route path='Dashboard' index element={<Dashboard/>}/>
      <Route path='Profile' index element={<Profile/>}/>
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
