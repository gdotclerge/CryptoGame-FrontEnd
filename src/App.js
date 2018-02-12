import React, { Component } from 'react';
import TickerContainer from './components/ticker/TickerContainer';
import Adapter from './adapter';
import Login from "./components/login/Login"
import Auth from "./authAdapter"
import Home from "./components/Home"
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
         }).then(Adapter.getTickersInit()
             .then(json => {
               this.setState({
                 tickers: json
               })}
             ))
     }
  }

  createTickerPaths = () => {
    return this.state.tickers.map( (t)=>  {
      const pathName = `/${t.symbol}`
      const pathKey = `Path-ID-${t.id}`
      return <Route exact path={pathName} key={pathKey} render={(routerProps)=> ( <TickerContainer ticker={t} key={t.id}/>)} />
    })
  }


  handleLoginSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[0].value
    let password = e.target.children[1].value
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


  handleSignUpSubmit = (e) => {

  }



  render() {
    return (
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
          return this.state.userIsLoggedIn ? <Redirect to="/home" /> : <Login handleLoginSubmit={this.handleLoginSubmit} />
        }
        }/>
        </Switch>
    );
  }





}

export default withRouter(App);






// <Route path="/login" render={(routerProps)=> {return <Login handleLoginSubmit={this.handleLoginSubmit} /> }} />
// <Route path="/signup" render={(routerProps)=> {return <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}} />
// <Route path="/tickers" component={TickerContainer} />
// <Route path="/" />
