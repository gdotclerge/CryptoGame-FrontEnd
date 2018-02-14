import React, { Component } from 'react';
import TickerContainer from './components/ticker/TickerContainer';
import Adapter from './adapter';
import Login from "./components/login/LogInContainer"
import Auth from "./authAdapter"
import Home from "./components/home/HomeContainer"
// import SignUp from "./components/login/SignUp"
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    user: "",
    userIsLoggedIn: false,
    tickers: []
  }

  componentDidMount = () => {
    if (localStorage.getItem('jwt')) {
       Auth.currentUser()
         .then(user => {
           if (!user.error) {
             this.setState({
               userIsLoggedIn: true,
               user: user
             })
           }
         })
     }

     Adapter.getTickersInit()
       .then(json => {
         this.setState({
           tickers: json
         })}
       )
  }

  createTickerPaths = () => {
    return this.state.tickers.map( (t)=>  {
      const pathName = `/${t.symbol}`
      const pathKey = `Path-ID-${t.id}`
      return <Route exact path={pathName} key={pathKey} render={(routerProps)=> {
        return this.state.userIsLoggedIn ?
        <TickerContainer ticker={t} key={t.id} user={this.state.user} refreshUser={this.refreshUser}/> : <Redirect to="/login"/>
        }} />
    })
  }


  handleLoginSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[0].value
    let password = e.target.children[2].value
    this.logIn({username: username, password: password})
  }

  logIn(loginParams){
    Auth.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            userIsLoggedIn: true,
            user: user
          })
          localStorage.setItem('jwt', user.jwt )
        }
      })
  }


  logOutButton = () => {
    if(this.state.userIsLoggedIn){
      return(<button onClick={this.handleLogOut}>LogOut</button>)
    }
  }

  handleLogOut = () => {
    localStorage.removeItem('jwt')
    this.setState({ isLoggedIn: false, user: {} }, ()=> console.log(this.state.isLoggedIn))
  }


  handleSignUpSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[0].value
    let firstName = e.target.children[2].value
    let lastName = e.target.children[4].value
    let password = e.target.children[6].value
    let password_confirmation = e.target.children[8].value
    this.signUp({username, firstName, lastName, password, password_confirmation})
  }

  signUp = (signUpParams) => {
    Auth.signUp(signUpParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            userIsLoggedIn: true,
            user: user
          })
          localStorage.setItem('jwt', user.jwt )
        }
      })
  }

  refreshUser = (user) => {
    if (!user.error) {
      this.setState({
        user: user
      }, console.log("DONE"))
  }}

  render() {
    console.log("rendered")
    return (
      <div>
        {this.logOutButton()}
        <Switch>
          {this.createTickerPaths()}

          <Route exact path='/' render={()=>
            {
              return this.state.userIsLoggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>}
            } />
          <Route exact path='/home' render={()=>
            {
              return this.state.userIsLoggedIn ? <Home /> : <Redirect to="/login"/>}
            } />
          <Route exact path="/login" render={()=>
            {
              return this.state.userIsLoggedIn ? <Redirect to="/home" /> : <Login handleLoginSubmit={this.handleLoginSubmit} tickers={this.state.tickers} handleSignUpSubmit={this.handleSignUpSubmit} />
            }
            } />
        </Switch>
      </div>
    );
  }





}

export default withRouter(App);






// <Route path="/login" render={(routerProps)=> {return <Login handleLoginSubmit={this.handleLoginSubmit} /> }} />
// <Route path="/signup" render={(routerProps)=> {return <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}} />
// <Route path="/tickers" component={TickerContainer} />
// <Route path="/" />
