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
import axios from "axios";
import Dashboard from './components/Dashboard';

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
          <Navbar />
          <Route exact path = '/' component={Home} />
          <Route exact path = '/search' component={SearchRecipes} />
          <Route exact path = '/saved' component={SavedRecipes} />
          <Route exact path = '/submit' component={SubmitRecipes} />
          <Route path = '/user' component ={Dashboard} />
          <Route exact path = '/signin' component={SignIn} />
        </Wrapper>
      </Router>
    )}


}

export default App;
