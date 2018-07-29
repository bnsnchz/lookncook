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

    }

    onClick() {
        event.preventDefault();

    }

    getRecipeById = () => {
        axios.get("api/recipes/:id").then(response => {
            console.log(response)
        })
    }
    render() {
        return(
            <div>
                <h1>Recipe Name</h1>
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