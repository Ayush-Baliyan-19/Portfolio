import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Error/error.css'
const Error = () => {
  return (
    <div className='error'>
        <h1>404</h1>
        <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
        <p className='error-p'>The Page You Are Trying To Reach Might Have Been Removed Or Its Name Have Changed Or Is Temporarily Available.</p>
        <NavLink className='error-button' to='/'>Back To Homepage</NavLink>
    </div>
  )
}

export default Error