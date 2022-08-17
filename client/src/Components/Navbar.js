import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import logo from "./images/logo.png"

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <img className='w-25' src={logo} alt='Logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mx-4">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item mx-2">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/signup">Registration</Link>
        </li> */}
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar