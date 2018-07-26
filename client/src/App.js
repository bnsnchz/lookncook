import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchRecipes from './components/SearchRecipes';
import SavedRecipes from './components/SavedRecipes';
import SubmitRecipes from './components/SubmitRecipes';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {

    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Route exact path = '/' component={Home} />
          <Route exact path = '/search' component={SearchRecipes} />
          <Route exact path = '/saved' component={SavedRecipes} />
          <Route exact path = '/submit' component={SubmitRecipes} />
        </Wrapper>
      </Router>
    )
}

export default App;
