import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './SearchRecipes.css'
import axios from 'axios';

class SearchRecipes extends Component {
    state = {
        recipes: [],
        search:'',
        recipeObject: []
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

  handleRedirect= id => {
      axios.post(`/recipe/${id}`, id)
      .then(results => {
          this.setState({
              recipeObject: results.data[0]
          })
          this.props.history.push(this.state.recipeObject, `/recipe/${id}`)
          console.log("this is results.data: ", results.data)
          window.location.href = `/recipe/${id}`

      })

  }

    handleSubmit = event => {
        event.preventDefault();
        this.searchRecipes()
    }

    getRecipes = () => {
        axios.get('/api/recipes').then(response => {
            this.setState({
                recipes: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

   

    searchRecipes = () => {
        var search = {
            search:this.state.search.toLowerCase().split(' ')
        }
        axios.post('/api/search', search)
        .then(response => {
            this.setState({
                recipes:response.data
            })
        }).catch(error => {
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
                                <li className="dishName" 
                                onClick ={()=>
                                this.handleRedirect(recipe._id)} id = {recipe._id}>
                                    {recipe.dishname}<br/>
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

