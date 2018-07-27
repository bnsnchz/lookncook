import React, {Component} from 'react';
import './SubmitRecipes.css'

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
                    <br/>
                    <label htmlFor='recipeTitle'>Recipe Title</label>
                    <br/>
                    <br/>
                    <input 
                        type = 'text' 
                        id='recipeTitle' 
                        name='recipeTitle' 
                        value={this.state.recipeTitle}
                        onChange={this.handleInputChange}
                        className = 'formTitle'
                        placeholder='Required'
                        rows = '10'
                        cols = '50'>
                    </input>
                    <br/>
                    <br/>
                    <label htmlFor='ingredientList'>Ingredient List</label>
                    <br/>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='ingredientList' 
                        name='ingredientList'
                        value= {this.state.ingredientList} 
                        onChange={this.handleInputChange}
                        placeholder='Add your ingredient list here...'
                        rows = '10'
                        cols = '50'
                        >
                    </textarea>
                    <br/>
                    <br/>
                    <label htmlFor='recipeTitle'>Instructions</label>
                    <br/>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='instructionList' 
                        name='instructionList' 
                        value={this.state.instructionList}
                        onChange={this.handleInputChange}
                        placeholder='Add your instructions here...' 
                        rows = '10' 
                        cols = '50'>
                    </textarea>
                    <br/>
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