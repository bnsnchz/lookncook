import React, { Component } from "react";
import axios from "axios";


class RecipePage extends Component {

    state = {
        dishname: "",
        image: "",
        cooktime: "",
        ingredients: "",
        instructions: "", 
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
            this.setState({
                dishname: recipe.dishname,
                image: recipe.image,
                cooktime: recipe.cooktime,
                ingredients: recipe.ingredients,
                instructions : recipe.instructions,
                createdBy : recipe.createdBy
            })
        // console.log(JSON.stringify(response.data[0])); 
        console.log(this.state);

        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.dishname}</h1>
                <image id="recipe-image" url="./" />
                <h3>Cook time: X</h3>
                <div id="ingredients-container">
                <ol>
                    <h3>Ingredients:</h3>
                    <li>Ingredient ...</li>
                    <li>Ingredient ...</li>
                    <li>Ingredient ...</li>
                    <li>Ingredient ...</li>
                    <li>Ingredient ...</li>
                </ol>
            </div>
            <br/>
            <div id="instructions-container">
                <ol>
                    <h3>Directions: </h3>
                    <li>Step 1 ...</li>
                    <li>Step 2 ...</li>
                    <li>Step 3 ...</li>
                    <li>Step 4 ...</li>
                    <li>Step 5 ...</li>
                </ol>
                </div>
            </div>
        )
    }

}

export default RecipePage;