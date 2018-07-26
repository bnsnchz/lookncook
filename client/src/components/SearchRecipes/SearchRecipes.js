import React, {Component} from 'react';
import './SearchRecipes.css'
class SearchRecipes extends Component {
    state = {
        recipes: [],
        search:'',

    }
    
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleSubmit() {

    }

    getRecipes() {

    }
    render() {
        return (
            <div>
                <h1 className="searchTitle">Search Recipes</h1>
                <form id = 'searchForm'>
                    <input  onChange={this.handleInputchange} name='search' value={this.state.name} className="searchBox" type = 'text'></input>
                    <button className = 'searchRecipe' type = 'submit'>Search</button>
                </form>
                <div id = 'recipeResults'>
                    <ul id = 'recipeUL'>
                        <li className = 'recipeList'>hi</li>
                        <li className = 'recipeList'>hi</li>
                        <li className = 'recipeList'>hi</li>
                        <li className = 'recipeList'>hi</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchRecipes;