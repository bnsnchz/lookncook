import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchRecipes from './components/SearchRecipes';
import SavedRecipes from './components/SavedRecipes';
import SubmitRecipes from './components/SubmitRecipes';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import RecipePage from "./components/RecipePage"
import axios from "axios";
import Dashboard from './components/Dashboard';


class App extends Component {

  state = {
    loaded: false,
    authenticated: false
  }

  componentDidMount(){
    axios.get("/auth").then(res=>{
      console.log(res.data)
      this.setState({
        loaded: true,
        authenticated: res.data
      });
    });
  }

  setLogout = event => {
    event.preventDefault();
    this.setState({
      authenticated: false,
      loaded: false
    })
    window.location.href = "/"
  }
  setLogin = () => {
    this.setState({
      authenticated: true
    });
  }

  render(){ 
    return (
      <Router>
          <Wrapper>
              <Navbar logOut={this.setLogout} authenticated = {this.state.authenticated}/>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/search' component={SearchRecipes} />
              <Route exact path = '/saved' render ={(props) => 
                <SavedRecipes {...props} authenticated={this.state.authenticated}/>}
              />
              <Route exact path = '/submit' render ={(props) => 
                <SubmitRecipes {...props} authenticated={this.state.authenticated}/>} 
              />
              <Route path = '/user' render ={(props) => 
                <Dashboard {...props} authenticated={this.state.authenticated}/>} 
              />
              <Route exact path = '/signin' render ={(props) => 
                <SignIn {...props} setLogin={this.setLogin}/>}
              />
              <Route exact path = '/register' render ={(props) => 
                <Register {...props}/>} 
              />
          </Wrapper>
      </Router>
    )
  }


}

export default App;
