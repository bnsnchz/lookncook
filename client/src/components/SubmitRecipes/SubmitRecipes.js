import React, {Component} from 'react';
import axios from 'axios';

class SubmitRecipes extends Component {
    state = {
        recipeTitle:'',
        instructionList:'',
        ingredientList:'',
        cookTime: ''
    }

    submitRecipe = () => {
        var objData = {
            title : this.state.recipeTitle,
            cooktime: this.state.cookTime,
            instructions: this.state.instructionList.split(/\n/),
            ingredients: this.state.ingredientList.split(/\n/)
        }
        console.log(objData);

        axios.post('/api/recipes', objData)
        .then(response => {
            console.log('we received something back from backend - hooray!');
        }).catch(err => {
            console.log(err);
        })
    }

    handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
        console.log(value.split(/\n/))
    }

    handleFormSubmit= event => {
        // event.preventDefault();
        console.log('formSubmit clicked');
        this.submitRecipe(this.state);
    }

 
    


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
                    <label htmlFor='recipeTitle'>Cook Time</label>
                    <br />
                    <input
                        type='text'
                        id='cookTime'
                        name='cookTime'
                        value={this.state.cookTime}
                        onChange={this.handleInputChange}
                        className='formTitle'
                        placeholder='Time in minutes'>
                    </input>
                    <br />
                    <label htmlFor='ingredientList'>Ingredient List</label>
                    <br/>
                    <textarea 
                        type = 'text' 
                        id='ingredientList' 
                        name='ingredientList'
                        value= {this.state.ingredientList} 
                        onChange={this.handleInputChange}
                        placeholder='Add your ingrediens list here...'
                        rows = '10'
                        cols = '40'
                        >
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
                        placeholder='Add your instructions here...' 
                        rows = '10' 
                        cols = '50'>
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