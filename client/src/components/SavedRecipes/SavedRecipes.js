import React, {Component} from 'react';
import axios from 'axios';

class SavedRecipes extends Component {
    componentDidMount() {
        axios.get("/auth").then(res=>{
            console.log(res.data)
            if (res.data === true) {
              this.setState({
                loaded: true,
                authenticated: res.data
              }, () => {
                this.getSavedRecipes();        
              });
            } else {
                this.props.history.push('/signin')
            };
          });
    }

    getSavedRecipes() {

    }
    
    render() {
        return (
            <div>
                <h1>Saved Recipes</h1>
            </div>
        )
    }
}

export default SavedRecipes;