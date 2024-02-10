import React from 'react'

// user style
import '../../assets/user_assets/user_home/css/user_home_styles.css';
import '../../assets/user_assets/user_prod_des/css/user_prod_styles.css';

// user js
import '../../assets/user_assets/user_home/js/user_home_scripts';
import '../../assets/user_assets/user_prod_des/js/user_prod_scripts';

// layouts
import Navber_User from './Navber_User';

import Footer_User from './Footer_User';

// components
import Header_banner from '../../components/user_com/home_com/Header_banner';
import Body_user from '../../components/user_com/home_com/Body_user';

function User_master_layout() {
    return ( 
    <>
    <Navber_User/>
    <Header_banner/>
    <Body_user/>
    <Footer_User/>
    </>
    
    );
}

export default User_master_layout;