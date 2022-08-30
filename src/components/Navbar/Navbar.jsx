import React, { useState } from "react";
import {HiMenuAlt2} from 'react-icons/hi';
import {BiHomeAlt} from 'react-icons/bi';
import {IoCloseSharp} from 'react-icons/io5';
import {TbMovie} from 'react-icons/tb';
import {IoNewspaperOutline} from 'react-icons/io5';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import {MdOutlineStackedBarChart} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "../Search/Search";
import './navbar.css';
import Home from "../../container/Home/Home";
import Magazine from "../../container/Magazine/Magazine";
import Vedio from "../../container/Vedio/Vedio";
import Pool from "../../container/Pool/Pool";

// src/container/Magazine/Magazine.jsx

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)


  return (
    <nav className="app_navbar">
        <div className="app_navbar-logo">
            <a href="/"><h1>News</h1></a>
        </div>

        <Router>
          <ul  className={isMobile ? "nav-links-mobile" : "app_navbar-links"}
          onClick={() => setIsMobile(false)}
          
          >
            <li className="p_opensans">
              <Link to="/"><span className="navbar_icon"><BiHomeAlt /></span> Home</Link>
            </li>
            <li className="p_opensans">
              <Link to="/vedio"><span className="navbar_icon"><TbMovie /></span> Vedio</Link>
            </li>
            <li className="p_opensans">
            <Link to="/pool"><span className="navbar_icon"><MdOutlineStackedBarChart /></span> Pool</Link>
            </li>
            <li className="p_opensans">
              <Link to="/magazine"><span className="navbar_icon"><IoNewspaperOutline /></span> Magazine</Link>
            </li>
            <li className="p_opensans"><span className="navbar_icon"><MdOutlineVerifiedUser color="#3CCF4E"/></span></li>
            <li className="p_opensans"><span className="navbar_icon"><IoMdNotificationsOutline /></span></li>
          </ul>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/vedio" element={<Vedio/>}></Route>
            <Route path="/pool" element={<Pool/>}></Route>
            <Route path="/magazine" element={<Magazine/>} ></Route>
          </Routes>
            
        </Router>

        <div className="app__navbar-login">
        <Search />           
      </div>
      <button className="mobile-menu-icon"
      onClick={() => setIsMobile(!isMobile)}
      >

        {isMobile ? <i><IoCloseSharp/></i> : <i><HiMenuAlt2 /> </i>}
      </button>
    </nav>
  )
}

export default Navbar