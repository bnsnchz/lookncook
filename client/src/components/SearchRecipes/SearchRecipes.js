import React, {Component} from 'react';
import './SearchRecipes.css'
import axios from 'axios';

class SearchRecipes extends Component {
    state = {
        recipes: [],
        search:'',
        recipeObject: [],
        stylesShow: {
            "display":"block"
        },
        stylesNone: {
            "display":"none"
        }
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
      axios.post(`/search/${id}`, id)
      .then(results => {
          this.setState({
              recipeObject: results.data[0]
          })
          this.props.history.push(`/recipe/${id}`)
        //   console.log("this is results.data: ", results.data)
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

    saveRecipe = id => {
        var recipeID = {
            id:id
        }
        axios.post('/api/saverecipe', recipeID).then(res => {
            if(res.data === "already saved"){
                alert("Recipe Already Saved!");
            }
            console.log("saved recipe sucessfully");
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

    // Strikethrough

    

    render() {
        return (
            <div>
                <img id="searchRecipes" src="./assets/images/search.png" alt="search" />
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
                                <div id = 'imgContainer'>
                                    <button
                                        style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow}
                                        onClick={ () => {this.saveRecipe(recipe._id)}}
                                        id = 'saveBtn'>Save Recipe</button>
                                    <img className="dishPic" onClick={() =>
                                    this.handleRedirect(recipe._id)} src={recipe.image} alt={recipe.dishname}/>
                                </div>
                                <div id = 'nameContainer'>
                                    <li className="dishName" 
                                    onClick ={ () => this.handleRedirect(recipe._id)} id = {recipe._id}>
                                    {recipe.dishname}
                                    <br/>
                                    </li>
                                </div>
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

