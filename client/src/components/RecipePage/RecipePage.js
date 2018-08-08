import React, { Component } from "react";
import axios from "axios";
import Timer from "../Timer/Timer"
import "./RecipePage.css"

class RecipePage extends Component {

   state = {
        dishname: "",
        image: "",
        upload:[],
        cooktime: "",
        ingredients: [],
        instructions: [], 
        savedRecipes:[],
        createdBy: "",
        ID:'',
        stylesShow: {
            "display":"block"
        },
        stylesNone: {
            "display":"none"
        }

    }
    
    componentDidMount() {
        this.getRecipeById();
        this.getSavedRecipes();
    }

    onClick = (event, i) => {
        event.preventDefault();
        this.state.instructions[i].flag = !this.state.instructions[i].flag
        this.setState({
           instruction: this.state.instructions
        })
    }

    getRecipeById = () => {
        var id = (window.location.href).match(/(recipe).+\w/g);
        axios.get("/api/"+id).then(response => {
            var recipe = response.data[0]
            if (recipe) {
                let variable = recipe.instructions.map( item => {
                    return {
                        instructions : item,
                        flag: false
                    }
                })
                this.setState({
                    dishname: recipe.dishname,
                    image: recipe.image,
                    cooktime: recipe.cooktime,
                    ingredients: recipe.ingredients,
                    instructions: variable,
                    createdBy : recipe.createdBy,
                    upload:recipe.upload,
                    ID:recipe._id
                })
            } else {
                this.props.history.push("/search")
            }
        })
    }
    getSavedRecipes = () => {
        if (this.props.authenticated) {
            axios.get("/userInfo").then(res =>{
                if (res) {
                    this.setState({
                        savedRecipes:res.data[0].savedRecipes
                    }, () => {
                        console.log(this.state.savedRecipes)
                    })
                }
            })
        }
    }
    saveRecipe = id => {
        var recipeID = {
            id:id
        }
        axios.post('/api/saverecipe', recipeID).then(res => {
            if(res.data === "already saved"){
                alert("Recipe Already Saved!");
            } else {
                this.getSavedRecipes();
            }
        })
    }
    removeSaved = (id) => {
        var recipeID = {
            id:id
        }
        axios.post('/removesave', recipeID).then( res => {
            this.setState({
                savedRecipes:res.data[0].savedRecipes
            })
        })
    }


    render() {
        const strikeStlye = {
            textDecoration: "line-through"
        }
        const NotStrikeStlye = {
            textDecoration: "none"
        }
        let savedRecipe = this.state.savedRecipes.map(item => {
            return item._id
        })
    
        return(
            <div className="recipePage">
                <br />
                <div className="imgWrapper">
                <img className="recipeImg" src="../assets/images/recipe.png" alt="recipe" />
                </div>
                <br/>
                <div id="title-container"> 
                <img id="recipe-image" src={!this.state.image?"data:image/jpeg;base64,"+ Buffer.from(this.state.upload,'base64').toString('base64'):this.state.image} alt={this.state.dishname}/>
                <button
                style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow}
                onClick={() => {savedRecipe.indexOf(this.state.ID)!==-1?this.removeSaved(this.state.ID):this.saveRecipe(this.state.ID)}}
                id = 'saveBtn'>
                    <i
                    className={savedRecipe.indexOf(this.state.ID)!==-1?"fas fa-heart":"far fa-heart"}>
                    </i>
                </button>
                <h1><u>{this.state.dishname}</u></h1>
                <h3 className="cookTime"><u>Cook time:</u></h3><p>{this.state.cooktime} minutes</p>
                <h3><u>Ingredients:</u></h3>
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
                            <div key={i}>
                                <li >
                                    <div style={item.flag ? strikeStlye : NotStrikeStlye} id="step-container"> {item.instructions}
                                    </div>
                                    <button id="instruction-btn" onClick={(event) => this.onClick( event, i)}>Done</button>
                                {item.instructions.match(/\d+(?= minutes| minute)/) ?<Timer timeValue={item.instructions.match(/\d+(?= minutes| minute)/)} />:null}
                                
                                </li>
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