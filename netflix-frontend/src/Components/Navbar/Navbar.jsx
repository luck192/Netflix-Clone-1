import React, { useEffect, useReducer, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import dropDown_icon from '../../assets/caret_icon.svg'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate('/');
  }
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }else{
         navRef.current.classList.remove('nav-dark');
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
            <Link className='homebutton' to={'/home'}> Home</Link>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
       <img src={searchIcon} alt="icon" className='icons' />
       <p>Children</p>
        <img src={bellIcon} alt="icon" className='icons' />
        <div className="navbar-profile">
              <img src={profile_img} alt="icon" className='profile' />
             <img src={dropDown_icon} alt="icon" />
             <div className="dropdown">
                <p onClick={handleLogout}>signout Of Netflix</p>
             </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
