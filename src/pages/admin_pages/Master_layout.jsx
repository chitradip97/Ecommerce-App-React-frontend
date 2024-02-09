import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
 import '../../assets/admin_assets/css/styles.css';
 import '../../assets/admin_assets/js/scripts';
 import { Outlet } from 'react-router-dom';

//  Components
import Dashboard from '../../components/admin_com/Dashboard';

function Master_layout() {
    return ( 
    <>
    <div className='sb-nav-fixed'>
    <Navbar/>
    <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
        < Sidebar/>
        </div >
    
    <div id='layoutSidenav_content'>
        <main>
        {/* content component will be attached here */}
        Master File
        <Outlet/>
        </main>
        <Footer/>
    </div>
    </div>
    </div>
    
    </> 
    );
}

export default Master_layout;