import React, { Component } from 'react';
import TickerContainer from './components/ticker/TickerContainer';
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp"
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    user: ""
  }


  componentDidMount = () => {

  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[0].value
    let password = e.target.children[1].value
    debugger
  }

  handleSignUpSubmit = (e) => {

  }


  render() {
    return (
        <Switch>
          <Route path="/login" render={(routerProps)=> {return <Login handleLoginSubmit={this.handleLoginSubmit} /> }} />
          <Route path="/signup" render={(routerProps)=> {return <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}} />
          <Route path="/tickers" component={TickerContainer} />
          <Route path="/" />
        </Switch>
    );
  }





}

export default withRouter(App);
