import React, {Component} from 'react';

class SavedRecipes extends Component {
    componentDidMount() {
        this.getSavedRecipes();
    }

    getSavedRecipes() {

    }
    
    render() {
        return (
            <div>
                <h1>Saved Recipes</h1>
                <p id="noshow-bottom2">blank</p>
            </div>
        )
    }
}

export default SavedRecipes;