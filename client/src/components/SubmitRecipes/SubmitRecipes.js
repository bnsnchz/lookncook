import React, {Component} from 'react';

class SubmitRecipes extends Component {
    state = {
        recipeTitle:'',
        instructionList:[],
        ingredientList:[]
        //wait for models to finish and replicate model format

    }
    handleInputChange = event => {
        event.preventDefault();
        event.target = {}
        this.handleBulletPoint();
    }

    handleFormSubmit= event => {
        event.preventDefault();

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
                    <label for='recipeTitle'>Recipe Title</label>
                    <br/>
                    <input 
                        type = 'text' 
                        id='recipeTitle' 
                        name='recipeTitle' 
                        value={this.state.recipeTitle}
                        className = 'formTitle'
                        placeholder='Required'>
                    </input>
                    <br/>
                    <label for='ingredientList'>Ingredient List</label>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='ingredientList' 
                        name='ingredientList'
                        value= {this.state.ingredientList} 
                        placeholder='Ingredients...'>
                    </textarea>
                    <br/>
                    <label for='recipeTitle'>Instruction</label>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='instructionList' 
                        name='instructionList' 
                        value={this.state.instructionList}
                        placeholder='Instructions' 
                        rows = '10' 
                        cols = '100'>
                    </textarea>
                    <br/>
                    <button id="submitRecipe">Submit Recipe</button>
                </form>
               
            </div>
        )
    }
}

export default SubmitRecipes;