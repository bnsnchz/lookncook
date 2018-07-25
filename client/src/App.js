import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchRecipes from './components/SearchRecipes';
import SavedRecipes from './components/SavedRecipes';
import SubmitRecipes from './components/SubmitRecipes';

const App = () => {

    return (
      <Router>
        <Wrapper>
          <Header />
            <Route exact path = '/search' component={SearchRecipes} />
            <Route exact path = '/saved' component={SavedRecipes} />
            <Route exact path = '/submit' component={SubmitRecipes} />
          <Footer />
        </Wrapper>
      </Router>
    )
}

export default App;
