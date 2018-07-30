import React, { Component } from "react";
import axios from "axios";
import "./RecipePage.css"


class RecipePage extends Component {

    state = {
        dishname: "",
        image: "",
        cooktime: "",
        ingredients: [],
        instructions: [], 
        createdBy: ""

    }
    
    componentDidMount() {
        this.getRecipeById()
    }

    onClick = event => {
        event.preventDefault();

    }

    getRecipeById = () => {
        axios.get(window.location).then(response => {
            var recipe = response.data[0]
            if (recipe) {
                this.setState({
                    dishname: recipe.dishname,
                    image: recipe.image,
                    cooktime: recipe.cooktime,
                    ingredients: recipe.ingredients,
                    instructions : recipe.instructions,
                    createdBy : recipe.createdBy
                })
            } else {
                this.props.history.push("/search")
            }
        // console.log(JSON.stringify(response.data[0])); 
        console.log(this.state);

        })
    }
    render() {
        return(
            <div>
                <br />
                <br/>
                <div id="title-container"> 
                <img id="recipe-image" src={this.state.image} alt={this.state.dishname}/>
                <h1>{this.state.dishname}</h1>
                <h3 className="cookTime">Cook time:</h3><p>{this.state.cooktime} minutes</p>
                <h3>Ingredients:</h3>
                <ol>
                    {this.state.ingredients.map((ingredients, i) => {
                        return(
                            <li key={i}>{ingredients}</li>
                        )
                    })}
                </ol>
            </div>
            <br/>
            <div id="instructions-container">
                <h3>Directions: </h3>
                <ol>
                    {this.state.instructions.map((instructions, i)=>{
                        return (
                            <div>
                                <li key={i}><div id="step-container">{instructions}</div><button id="instruction-btn">✔</button></li>
                            <br/>
                            </div>
                        )
                    })}
                    

                </ol>
                </div>
            </div>
        )
    }

}

export default RecipePage;