import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='app_navbar'>
        <div className='app_navbar-logo'>
            <h1>M-Commerce</h1>
        </div>
        <div className='app_navbar-links'>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
        </div>
        <div className='app_navbar-login'>
            <button>Login</button>
            <button>Sign Up</button>
            <button>Cart (0) </button>
        </div>
    </div>
  )
}

export default Navbar