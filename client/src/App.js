import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SearchRecipes from './components/SearchRecipes';
import SubmitRecipes from './components/SubmitRecipes';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import RecipePage from "./components/RecipePage"
import axios from "axios";
import Dashboard from './components/Dashboard';
import Timer from './components/Timer';


class App extends Component {

  state = {
    loaded: false,
    authenticated: false
  }

  componentDidMount(){
    axios.get("/auth").then(res=>{
        this.setState({
          loaded: true,
          authenticated: res.data
        });
    });      
  };

  setLogout = event => {
    event.preventDefault();
    axios.get('/logout').then(res => {
      console.log(res.data);
      if (res.data === "Session ended."){
        this.setState({
          authenticated: false,
          loaded: true
        });
      }
    });
  }

  setLogin = () => {
    this.setState({
      authenticated: true
    });
  }

  render(){ 
    if (!this.state.loaded) {
      return null;
    }
    return (
      <Router>
        <Wrapper>
          <Navbar logOut={this.setLogout} authenticated = {this.state.authenticated}/>
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/search' render ={(props) => 
                <SearchRecipes {...props} authenticated={this.state.authenticated}/>} />
              <Route path="/recipe" component={RecipePage} /> 
              <Route exact path = '/signin' render ={(props) => 
              <SignIn {...props} setLogin={this.setLogin}/>}
              />
              <Route exact path = '/register' render ={(props) => 
                <Register {...props}/>} 
              />
              {!this.state.authenticated? <Redirect to="/signin"/>: null}
              
              <Route exact path = '/submit' render ={(props) => 
                <SubmitRecipes {...props} authenticated={this.state.authenticated}/>} 
              />
              <Route exact path = '/user' render ={(props) => 
                <Dashboard {...props} authenticated={this.state.authenticated}/>} 
              />
              <Redirect to="/" />
          </Switch>
        </Wrapper>
      </Router>
    )
  }


}

export default App;
