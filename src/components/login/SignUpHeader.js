import React from 'react'

const signUp = (props) => {


  return (
    <div>
      <h4>Sign Up</h4>
      <form onSubmit={props.handleSignUpSubmit}>
        <input type='text' placeholder='Username'/> <br/>
        <input type='text' placeholder='First Name'/> <br/>
        <input type='text' placeholder='Last Name'/> <br/>
        <input type='password' placeholder='Password'/> <br/>
        <input type='password' placeholder='Password Confirmation'/> <br/>
        <input type='submit' value='SignUp'/>
      </form>
      <h4>Already Signed Up?</h4>
      <button onClick={props.handleLogInClick}>Log In</button>
    </div>
  )



}

export default signUp
