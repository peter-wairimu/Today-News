import React from "react";
import {HiMenuAlt2} from 'react-icons/hi';
import {BiHomeAlt} from 'react-icons/bi';
import {IoCloseSharp} from 'react-icons/io5';
import {TbMovie} from 'react-icons/tb';
import {IoNewspaperOutline} from 'react-icons/io5';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import {MdOutlineStackedBarChart} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "../Search/Search";
import './navbar.css';



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className="app_navbar">
        <div className="app_navbar-logo">
            <h1>News</h1>
        </div>

        
        <ul className="app_navbar-links">
            <li className="p_opensans"><span className="navbar_icon"><BiHomeAlt /></span> Home</li>
            <li className="p__opensans"><a href="#about"><span className="navbar_icon"><TbMovie /></span> Vedio</a></li>
            <li className="p__opensans"><a href="#menu"><span className="navbar_icon"><MdOutlineStackedBarChart /></span> Pools</a></li>
            <li className="p__opensans"><a href="#awards"><span className="navbar_icon"><IoNewspaperOutline /></span> Magazines</a></li>
            <li className="p__opensans"><a href="#contact"><span className="navbar_icon"><MdOutlineVerifiedUser /></span></a></li>
            <li className="p__opensans"><a href="#contact"><span className="navbar_icon"><IoMdNotificationsOutline /></span></a></li>



        </ul>
        <div className="app__navbar-login">
        <Search />
        <div />
                    
      </div>
      <div className="app__navbar-smallscreen">
        <HiMenuAlt2 color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoCloseSharp fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar