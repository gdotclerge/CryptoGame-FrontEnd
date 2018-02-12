import React from 'react'

const logInHeader = (props) => {



  return (
    <div>
      Login
      <form onSubmit={props.handleLoginSubmit}>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <input type='submit' value='Login'/>
      </form>

      <button>Sign Up</button>
    </div>
  )



}

export default logInHeader
