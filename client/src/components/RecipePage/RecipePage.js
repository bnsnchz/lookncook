import React, { Component } from "react";
import axios from "axios";
// import Timer from "../Timer/Timer"
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

    onClick = (event, i) => {
        event.preventDefault();
        this.state.instructions[i].flag = !this.state.instructions[i].flag
        this.setState({
           instruction: this.state.instructions
        })
    }

    getRecipeById = () => {
        axios.get(window.location).then(response => {
            var recipe = response.data[0]
            if (recipe) {
                let variable = recipe.instructions.map( item => {
                    return {
                        instructions : item,
                        flag: false
                    }
                })
                console.log("variable", variable)
                this.setState({
                    dishname: recipe.dishname,
                    image: recipe.image,
                    cooktime: recipe.cooktime,
                    ingredients: recipe.ingredients,
                    instructions: variable,
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
        const strikeStlye = {
            textDecoration: "line-through"
        }
        const NotStrikeStlye = {
            textDecoration: "none"
        }
        return(
            <div className="recipePage">
                <br />
                <br/>
                <div id="title-container"> 
                <img id="recipe-image" src={this.state.image} alt={this.state.dishname}/>
                <h1 id='title'><u>{this.state.dishname}</u></h1>
                <h3 className="cookTime"><u>Cook time:</u></h3><p className='cookTime'>{this.state.cooktime} minutes</p>
                <h3 className='ingredients'><u>Ingredients:</u></h3>
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
                <h3><u>Directions: </u></h3>
                <ol>
                    {this.state.instructions.map((item, i)=>{
                        return (
                            <div>
                                <li key={i}><div style={item.flag ? strikeStlye : NotStrikeStlye}id="step-container"> {item.instructions}</div><button id="instruction-btn" onClick={(event) => this.onClick( event, i)}>✔</button></li>
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