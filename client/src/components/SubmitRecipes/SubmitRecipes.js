import React, {Component} from 'react';
import Controller from '../../controllers/recipeController.js'

class SubmitRecipes extends Component {
    state = {
        recipeTitle:'',
        instructionList:'',
        ingredientList:''
        //wait for models to finish and replicate model format

    }
    handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
        this.handleBulletPoint();
    }

    handleFormSubmit= event => {
        event.preventDefault();
        console.log('formSubmit clicked');
        //axios request to POST recipe
    }

    handleBulletPoint = (event) => {
        if (event === 13) {
            console.log('you hit enter key');
        }
    }
    // handleAdditionalInstructions = event => {
    //     event.preventDefault();
    //     console.log('clicked add');
    // }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='recipeTitle'>Recipe Title</label>
                    <br/>
                    <input 
                        type = 'text' 
                        id='recipeTitle' 
                        name='recipeTitle' 
                        value={this.state.recipeTitle}
                        onChange={this.handleInputChange}
                        className = 'formTitle'
                        placeholder='Required'>
                    </input>
                    <br/>
                    <label htmlFor='ingredientList'>Ingredient List</label>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='ingredientList' 
                        name='ingredientList'
                        value= {this.state.ingredientList} 
                        onChange={this.handleInputChange}
                        placeholder='Ingredients...'>
                    </textarea>
                    <br/>
                    <label htmlFor='recipeTitle'>Instruction</label>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='instructionList' 
                        name='instructionList' 
                        value={this.state.instructionList}
                        onChange={this.handleInputChange}
                        placeholder='Instructions' 
                        rows = '10' 
                        cols = '100'>
                    </textarea>
                    <br/>
                    <button id="submitRecipe" 
                        onClick={this.handleFormSubmit}>
                        Submit Recipe
                    </button>
                </form>
               
            </div>
        )
    }
}

export default SubmitRecipes;