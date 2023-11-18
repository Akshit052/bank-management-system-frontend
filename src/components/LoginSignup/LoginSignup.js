import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { act } from 'react-dom/test-utils'

const LoginSignup = () => {

  const[action, setAction] = useState("Sign Up");

  return (
    // if(action==="Login"){
    //   <div className='input'>
    //       <img src={user_icon} alt=''/>
    //       <input type='text' placeholder='First Name'/>
    //     </div>
    // }
    // else{
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>

        <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='First Name'/>
        </div>

        <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='Last Name'/>
        </div>

        <div className='input'>
          <img src={email_icon} alt=''/>
          <input type='email' placeholder='Email Id'/>
        </div>

        <div className='input'>
          <img src={password_icon} alt=''/>
          <input type='password' placeholder='Password'/>
        </div>

        <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='number' placeholder='Phone Number'/>
        </div>

        <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='number' placeholder='Aadhar Number'/>
        </div>

        <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='Address'/>
        </div>

        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

        

      </div>
    </div>
  )
}

export default LoginSignup