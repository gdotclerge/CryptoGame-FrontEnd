import React from 'react'
import LogInBody from './LogInBody'
import LogInHeader from './LogInHeader'
import SignUpHeader from './SignUpHeader'


class Login extends React.Component {
  state = {
    signUp: false
  }


  loginHeaderHandler = () => {
    if (this.state.signUp){
      return (<SignUpHeader handleSignUpSubmit={this.props.handleSignUpSubmit} handleLogInClick={this.handleLogInClick}/>)
    }
    else {
      return (<LogInHeader handleLoginSubmit={this.props.handleLoginSubmit} handleSignUpClick={this.handleSignUpClick}/>)
    }
  }


  handleSignUpClick = () => {
    this.setState({
      signUp: true
    })
  }

  handleLogInClick = () => {
    this.setState({
      signUp: false
    })
  }


  render(){
    return (
      <div>
        {this.loginHeaderHandler()}
        <LogInBody tickers={this.props.tickers} />
      </div>
    )
  }


}



export default Login
