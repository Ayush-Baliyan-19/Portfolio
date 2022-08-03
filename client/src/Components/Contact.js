import React from 'react'
import './css/contact/contact.css'
import { FaLinkedin,FaGithubSquare,FaInstagramSquare } from 'react-icons/fa'

const Contact = () => {

  const [user,setUser]=React.useState({
    name:"",
    email:"",
    message:"",
  })

  const handlechange=(e)=>{
    console.log(user);
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
    return user;
  }

  const sendmail= async (e)=>{
    e.preventDefault()
    const {name,email,message}=user;
    const res= await fetch('/mail',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name:name,email:email,message:message})
    });
    console.log(res)

    return res;
  }
  
  return (
    <div>
      <section className='contact-content'>
        <div className='conteent'>
        <p style={{display:'block'}}><a href='https://www.linkedin.com/in/ayush-baliyan-4a2242146/' className='joke'>Get A Joke</a></p>
        <h2>Contact Me</h2>
        <p>I am Here to help and answer any question that arises in your mind. Looking Forward to hearing from you &#128512;</p>
        <div className='contact-icons' >
        <a href='https://www.linkedin.com/in/ayush-baliyan-4a2242146/'><FaLinkedin className='icons' /></a>
        <a href='https://github.com/Ayush-Baliyan-19'><FaGithubSquare className='icons' /></a>
        <a href='https://www.instagram.com/impractical.kid/'><FaInstagramSquare className='icons' /></a>
        </div>
        </div>
      </section>
      <section className='contact-form'>
        <div className='contact-back'></div>
        <div className='form'>
          <form method='POST' >
            <label>
                Your Name:
            </label>
                <input type='text' name='name' value={user.name} onChange={handlechange}/>
            <label>
              Your Email:
            </label>
              <input type={'text'} name='email' value={user.email} onChange={handlechange}/>
            <label>
              Message:
            </label>
              <input type={'text'} name='message' value={user.message} onChange={handlechange}/>
              <input type={'submit'} value="Send Message" onClick={sendmail}/>
          </form>
        </div>
          <div className='contact-form-side'>
            <h4>How Can I Help?</h4>
            <p id='queries'>Please Send Your Queries, And I Will Try My Best to attend to your queries&#128512;</p>
            <p>Mail Me at <a href='https://www.linkedin.com/in/ayush-baliyan-4a2242146/'>ayushbaliyan05@gmail.com</a></p>
          </div>
      </section>
      </div>
  )
}

export default Contact