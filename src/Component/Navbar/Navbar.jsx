import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo/Netflix_Logo_PMS.png"
import Search_icon from "../../assets/magnifying-glass.png"
import Bell_icon from "../../assets/notification-bell.png"
import profile_img from "../../assets/cards/img_files/profile (2).png"
import caret_down from "../../assets/caret-down.png"
import { logout } from '../../firebase'

const Navbar = () => {
  
  const navRef = useRef();
 
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })
 

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language </li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={Search_icon} alt="search icon " height="20px"  className='icons'/>
            <p>Children</p>
            <img src={Bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={profile_img} alt="" height="30px" className='profile'/>
                <img src={caret_down} alt=""  className='caret'/>
                <div className="dropdown">
                  <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
                 </div>
    </div>
    </div>
  )
}

export default Navbar