import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/login/login.css'
import loginimage from './images/signin-image.jpg'
const Login = () => {
  const Navigate=useNavigate();
  const [user,setUser]=React.useState({
    email:"",
    pass:"",
  })

  const handlechange = (e) => {
    console.log(user);
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
    return user;
  }

  const postlogin= async (e) => {
    e.preventDefault()
    const {email,pass} = user;
    const res= await fetch('/signin',
    { method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({email:email,pass:pass})
    }
    );
    console.log(res);
    if(res.status===400 || res.status===500 )
    {
      window.alert("Invalid Credentials or User does not exist");
    }
    else{
      window.alert("Login Succesfull");
      Navigate('/');
    } 
  }


  return (
    <div className='login-main'>
      <div className='login'>
        <div className='login-div'>
          <img src={loginimage} alt="login"/>
          <div className='login-content'>
            <h2>Sign In</h2>
            <form method='POST' className='login-form'>
              <label>
              <i className="fa-solid fa-envelope"></i>
                <input type='email' name='email' placeholder="Your Email" autoComplete='off' onChange={handlechange} value={user.email} />
              </label>
              <label>
              <i className="fa-solid fa-lock"></i>
                <input type='password' name='pass' placeholder="Password" autoComplete='off' onChange={handlechange} value={user.pass}/>
              </label>
              <input type="submit" name="login" id="login" className="form-submit" value="Login" autoComplete='off' onClick={postlogin} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login