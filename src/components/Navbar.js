import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='app_navbar'>
        <div className='app_navbar-logo'>
            <Link to='/'>M-Commerce</Link>
        </div>
        <div className='app_navbar-links'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='app_navbar-login'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/cart'>Cart (0) </Link>
        </div>
    </div>
  )
}

export default Navbar