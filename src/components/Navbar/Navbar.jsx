import React from "react";
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
    const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className="app_navbar">
        <div className="app_navbar-logo">
            <h1>News</h1>
        </div>

        <Router>
          <ul  className="app_navbar-links">
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
            <li className="p__opensans"><span className="navbar_icon"><MdOutlineVerifiedUser /></span></li>
            <li className="p__opensans"><span className="navbar_icon"><IoMdNotificationsOutline /></span></li>
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