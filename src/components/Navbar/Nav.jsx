import React, { useState }  from 'react';
// import Logo from "../Logoimage/Logo";
import style from './nav.module.css'
import { IoIosSearch } from "react-icons/io";
import flagImage from './assets/flag.png';
import bellImage from './assets/bell.png';
import manImage from './assets/man.png';
import Logo from '../LOGO/Logo';
import SidebarDash from '../SidebarDashboard/SidebarDash';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Nav = () => {
// State variable to track whether the sidebar is open
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// Function to toggle the sidebar
const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

    

    return (
        <div className={style.container}>
        <div className={style.logo}> <Logo /></div>
        {/* Mobile re-usable nav-bar  */}
        <div className={style.Mobile_searchContainer}>
            <div className={style.NavInner_Wrapper}>
                
            <RiMenu3Line color="#000" size={35} onClick={toggleSidebar} />

            {/* Sidebar component, only visible when isSidebarOpen is true */}
            {isSidebarOpen && (
            <div
                style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 250, // adjust the width as needed
                height: '100vh',
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                padding: 20,
                transition: 'transform 50s ease-in-out',
                transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)', 
                }}
            >
                {/* Close icon to toggle the sidebar */}
                <RiCloseLine color="#000" size={35} onClick={toggleSidebar} />
                <SidebarDash />
            </div>
            )}
                   
               
            <div className={style.Mobile_status}>
                <div className={style.country}>
                    <img src={flagImage} alt="" />

                </div>
                <div className={style.notification}>
                    <img src={bellImage} alt="" />

                </div>
                <div className={style.acctOwner}>
                    <img src={manImage} alt="" />

                </div>

            </div>

            </div>



        </div>
        {/* Mobile re-usable nav-bar end */}
       
        <div className={`${style.headerSearch}`}>

            <div className={style.searchBox}>
                <span style={{ marginLeft: '10px' }}>
                    <IoIosSearch style={{ fontSize: "25px" }} />
                </span>
                <input type="search" 
                placeholder='Search'
                />
            </div>
        </div>
        
        <div className={style.status}>
            <div className={style.country}>
                <img src={flagImage} alt="" />

            </div>
            <div className={style.notification}>
                <img src={bellImage} alt="" />

            </div>
            <div className={style.acctOwner}>
                <img src={manImage} alt="" />
                <div className={style.detail}>
                    <div className={style.acctTitle}>John Paul</div>
                    <div className={style.acctType}>Admin</div>
                </div>
            </div>

        </div>

      
    </div>
  );
}

export default Nav;
