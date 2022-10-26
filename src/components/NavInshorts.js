import React from 'react'
import './NavInshorts.css'
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerDrawer from './HamburgerDrawer';

export const NavInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgerDrawer setCategory={setCategory}></HamburgerDrawer>    
        </div>
        <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' 
        alt='logo'
        style={{height: '80%', cursor: 'pointer'}}
        ></img>
    </div>
  );
}
