import React, {Component} from 'react';
import "./SavedRecipes.css"
import axios from "axios"

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
                <img id="savedImage" src="./assets/images/saved.png" alt="savedImage" />
            </div>
        )
    }
}

export default SavedRecipes;