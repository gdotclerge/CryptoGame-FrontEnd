import React from 'react'

const signUp = (props) => {



  return (
    <div>
      Sign Up
      <form onSubmit={props.handleSignUpSubmit}>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <input type='submit' value='SignUp'/>
      </form>
    </div>
  )



}

export default signUp
