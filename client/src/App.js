import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Error from './Components/Error'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}  />
        <Route exact path='/about' element={ <About/> } />
        <Route exact path='/contact' element={ <Contact/> } />
        <Route exact path='/login' element={ <Login/> } /> 
        <Route exact path='/signup' element={ <Signup/> } />
        <Route exact path='/Error' element={ <Error/> } />
      </Routes>
    </div>
  )
}

export default App