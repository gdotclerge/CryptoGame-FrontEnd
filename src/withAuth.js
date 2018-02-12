import React from 'react'
import {Redirect} from 'react-router-dom'

const withAuth = (BaseComponent, props, userIsLoggedIn) => {
  debugger
  if(userIsLoggedIn && props.location.pathname === '/login') {
    return <Redirect to="/home" />
  } else if (!userIsLoggedIn &&  props.location.pathname === '/home') {
    return <Redirect to="/login" />
  }
}

export default withAuth
