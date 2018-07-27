import React, {Component} from 'react';
import './SearchRecipes.css'
import axios from 'axios';

class SearchRecipes extends Component {
    state = {
        recipes: [],
        search:'',

    }

    componentDidMount() {
        this.getRecipes();
    }
    
    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleSubmit = event => {
        event.preventDefault();
        this.getRecipes(this.state.search)
    }

    getRecipes = () => {
        
        console.log(this.state.search);
        axios.get('/api/recipes/').then(response => {
            console.log(response);
            this.setState({
                recipes: response.data
            }, ()=> {
                console.log(this.state.recipes);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h1 className="searchTitle">Search Recipes</h1>
                <form id = 'searchForm'>
                    <input  
                        onChange={this.handleInputChange} name='search' 
                        value={this.state.search} className="searchBox" 
                        type = 'text'>
                    </input>
                    <button 
                        onClick = {this.handleSubmit}
                        className = 'searchRecipe' 
                        type = 'submit'
                    >Search
                    </button>
                </form>
                <div id = 'recipeResults'>
                    <ul id = 'recipeUL'>
                       {this.state.recipes.map((recipe, i) => {
                           return(
                            <div className="recipeList" key ={i}>
                                <img className="dishPic" src={recipe.image} alt={recipe.dishname}/>
                                <li id = {recipe._id}>
                                    {recipe.dishname}
                                </li>
                            </div>
                           )
                       })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchRecipes;