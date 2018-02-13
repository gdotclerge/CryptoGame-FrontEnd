import React from 'react'

const logInHeader = (props) => {

  const handleSignUpClick = () => {
    console.log("hello")
  }

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={props.handleLoginSubmit}>
        <input type='text' placeholder='username'/> <br/>
        <input type='password' placeholder='password'/> <br/>
        <input type='submit' value='Login'/>
      </form>
      <h4>New to Crypto Games? </h4>
      <button onClick={props.handleSignUpClick}>Sign Up</button>
    </div>
  )



}

export default logInHeader
