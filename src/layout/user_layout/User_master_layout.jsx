import React from 'react'

// user style
import '../../assets/user_assets/user_home/css/user_home_styles.css';
import '../../assets/user_assets/user_prod_des/css/user_prod_styles.css';

// user js
import '../../assets/user_assets/user_home/js/user_home_scripts';
import '../../assets/user_assets/user_prod_des/js/user_prod_scripts';

// layouts
import Header_User from './Header_User';

function User_master_layout() {
    return ( 
    <>
    <Header_User/>
    </>
    
    );
}

export default User_master_layout;