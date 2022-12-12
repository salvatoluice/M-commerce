import React from 'react'
import './home.css'
import Products from './Products'

const Home = () => {
  return (
    <div className='app_home'>
        <div className='home-text'>
            <h1>Wekcome to M-Commerce</h1>
            <h2>Check out the new arrivals</h2>
        </div>
        <div className='home-image'></div>
        <Products />
    </div>
  )
}

export default Home
