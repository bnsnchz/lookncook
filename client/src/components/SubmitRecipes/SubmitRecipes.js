import React, {Component} from 'react';
import axios from 'axios';
import './SubmitRecipes.css'
class SubmitRecipes extends Component {
    state = {
        recipeTitle:'',
        instructionList:'',
        keywords: '',
        ingredientList:'',
        cookTime: ''
    }

    submitRecipe = () => {
        var objData = {
            title : this.state.recipeTitle,
            cooktime: this.state.cookTime,
            keywords: this.state.keywords.toLowerCase().split(/\n/),
            instructions: this.state.instructionList.split(/\n/),
            ingredients: this.state.ingredientList.split(/\n/)
        }
        console.log(objData);

        axios.post('/api/recipes', objData)
        .then(response => {
            console.log("Bon Appetit")
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
            <div id = 'submit-form'>
                <form>
                    <br/>
                    <label htmlFor='recipeTitle'>
                        Recipe Title 
                    </label>
                    <br/>
                    <input 
                        type = 'text' 
                        id='recipeTitle' 
                        name='recipeTitle' 
                        value={this.state.recipeTitle}
                        onChange={this.handleInputChange}
                        className = 'formTitle'
                        placeholder='Required'
                        size = '50'>
                    </input>
                    <br/>
                    <br/>
                    <label htmlFor='cookTime'>
                        Cook Time
                        <div className="tooltip">  <i className="far fa-xs fa-question-circle"></i>
                            <span className="tooltiptext">
                            Please enter cook time in minutes only.
                            ie (2 hours = 120 minutes, 1 hour = 60 minutes, 1.5 hours = 90 minutes)
                            </span>
                        </div>
                    </label>
                    <br />
                    <input
                        type='text'
                        id='cookTime'
                        name='cookTime'
                        value={this.state.cookTime}
                        onChange={this.handleInputChange}
                        className='formTitle'
                        placeholder='Time in minutes'
                        size = '50'>
                    </input>
                    <br />
                    <br />
                    <label htmlFor='keywords'>
                        Keywords
                        <div className="tooltip">  <i className="far fa-xs fa-question-circle"></i>
                            <span className="tooltiptext">Keyword Tips:
                            Adding keywords related to your recipe helps users find it! Please make sure to format it in the following way:
                            <br/>
                            Beef&#9166;
                            <br/>
                            Asian&#9166;
                            <br/>
                            Noodles&#9166;
                            </span>
                        </div>
                    </label>
                    <br/>
                    <textarea
                        type = 'text' 
                        id='keywords' 
                        name='keywords'
                        value= {this.state.keywords} 
                        onChange={this.handleInputChange}
                        placeholder='Add some keywords or tags here...'
                        rows = '10'
                        cols = '50'
                        >
                    </textarea>
                    <br />
                    <br />
                    <label htmlFor='ingredientList'>
                        Ingredient List
                        <div className="tooltip">  <i className="far fa-question-circle fa-xs"></i>
                            <span className="tooltiptext">Formatting Tips:
                            Please create a new line for each different ingredient. For example:
                            <br/>
                            (1)Two Potatoes &#9166;
                            <br/>
                            (2)1/4 TBSP Salt &#9166;
                            </span>
                        </div>
                    </label>
                    <br />
                    <textarea
                        type='text'
                        id='ingredientList'
                        name='ingredientList'
                        value={this.state.ingredientList}
                        onChange={this.handleInputChange}
                        placeholder='Add your ingredients here...'
                        rows='10'
                        cols='50'
                    >
                    </textarea>
                    <br/>
                    <br/>
                    <label htmlFor='recipeTitle'>
                        Instructions
                        <div className="tooltip">  <i className="far fa-xs fa-question-circle"></i>
                            <span className="tooltiptext">Formatting Tips:
                            Please create a new line for each new set of instructions. For example:
                            <br/>
                            (1)Cut Vegetables&#9166;
                            <br/>
                            (2)Wash Vegetables&#9166;
                            </span>
                        </div>
                    </label>
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
                        Submit
                    </button>
                </form>
               
            </div>
        )
    }
}

export default SubmitRecipes;