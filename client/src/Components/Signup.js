import React from 'react'
import {useNavigate} from 'react-router-dom'
import './css/signup/signup.css'
import Signupimg from './images/signup-image.jpg'
const Signup = () => {
  const Navigate=useNavigate()
  const [user,setUser]=React.useState({
    name:"",
    email:"",
    work:"",
    phone:"",
    pass:"",
    cpass:"",
  })
  const handlechange=(e)=>{
    console.log(user);
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
    return user;
  }
  const PostData=async (e)=>{
    e.preventDefault();
    const {name,email,phone,pass,cpass}=user;
    const res= await fetch('/register', {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body:JSON.stringify({
        name:name,email:email,phone:phone,pass:pass,cpass:cpass,work:"web developer"
      })
    });
    console.log(res)

    /* return fetch('http://localhost:5000/stored', {
        method: 'POST',
        body: JSON.stringify(name,email,phone,pass,cpass),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); */
    
    // const data= await res.json();
    if(res.status===422)
    {
      window.alert("User Already Registered");
    }
    else if(res.status===500)
    {
      window.alert("Fill all the feilds properly")
    }
    else{
      window.alert("Registration Succesfull");
      Navigate('/login')
    }
    return res;
  }

  return (
    <div className='signup-main'>
      <div className='signup'>
        <div className='signup-div'>
          <h2>Sign Up</h2>
          <form  method="POST" className='signup-form'>
            <label>
            <i className="fa-solid fa-user"></i>
              <input type='text' placeholder="Your Name" name="name" value={user.name} onChange={handlechange}
              autoComplete="off" />
            </label>
            <label>
            <i className="fa-solid fa-envelope"></i>
              <input type='email' placeholder="Your Email" name="email" value={user.email} onChange={handlechange} autoComplete="off" />
            </label>
            <label>
              <i className="fa-solid fa-phone"></i>
              <input type='text' placeholder="Your Number" name="phone" value={user.phone} onChange={handlechange} autoComplete="off" />
            </label>
            <label>
            <i className="fa-solid fa-lock"></i>
              <input type='password' placeholder="Password" name="pass" value={user.password} onChange={handlechange} autoComplete="off" />
            </label>
            <label>
              <i className="fa-solid fa-lock"></i>
              <input type='password' placeholder="Retype Your Password" name="cpass" value={user.cpassword} onChange={handlechange} autoComplete="off" />
            </label>
            <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData} autoComplete="off" />
          </form>
          <img src={Signupimg} alt="Signup"/>
        </div>
      </div>
    </div>
  )
}

export default Signup