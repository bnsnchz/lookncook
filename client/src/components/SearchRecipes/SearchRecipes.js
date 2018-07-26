import React, {Component} from 'react';
import './SearchRecipes.css'
class SearchRecipes extends Component {
    state = {
        search:''
    }
    
    handleInputchange() {

    }

    handleSubmit() {

    }

    getRecipes() {

    }
    render() {
        return (
            <div>
                <h1>Search Recipes</h1>
                <form id = 'searchForm'>
                    <input type = 'text'></input>
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