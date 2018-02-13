import React from 'react'
import LogInBody from './LogInBody'
import LogInHeader from './LogInHeader'
import SignUpHeader from './SignUpHeader'


const login = (props) => {



  return (
    <div>
      <LogInHeader handleLoginSubmit={props.handleLoginSubmit}/>
      <LogInBody tickers={props.tickers} />
    </div>
  )



}

export default login
