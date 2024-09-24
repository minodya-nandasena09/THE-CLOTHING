import React from 'react';
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <>
      <div class="loginsignup">
        <div className='login-container'>
          <h1>Sign Up</h1>
          <div class="signup-fields">
            <input type="text" placeholder='Enter Your Name'/>
            <input type="email" placeholder='Enter Your Email'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className='signup-login'>Already have an Account? <span>Click Here</span></p>
          <div class="agree">
            <input type="checkbox" name='' id='' />
            <p>I agree to the terms and conditions</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;