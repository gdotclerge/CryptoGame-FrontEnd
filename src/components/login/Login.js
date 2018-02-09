import React from 'react'

const login = (props) => {



  return (
    <div>
      Login
      <form onSubmit={props.handleLoginSubmit}>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  )



}

export default login
