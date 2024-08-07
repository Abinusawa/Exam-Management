import React from "react";
import Flag from "./assets/flag.png";
import Belldot from "./assets/bell.png";
import man from "./assets/man.png";
import './navbar.css';
// import "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar">
   

      <div className="searchbar">
        <i class="ri-search-line icon" ></i>
        <input className="input" type="text" placeholder="Search here" />
      </div>
      <div className="leftside">
        <img className="img1" src={Flag} alt="Flag" />
        <img className="img1" src={Belldot} alt="Bell" />
        <div className="profile">
          <div className="img3">
            <img className="man" src={man} alt="Man" />
          </div>
          <div className="texts">
            <h3 className="name">John Paul</h3>
            <p className="admin">Administrator</p>
          </div>
          <i class="ri-arrow-drop-down-line arrow"></i>
        </div>

      </div>
    </nav >
  );
}

export default Navbar;