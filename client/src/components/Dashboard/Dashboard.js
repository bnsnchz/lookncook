import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
    state = {
        userName:"",
        savedRecipes: []
    }

    componentDidMount() {
        this.getUserInfo();  
    }

    getUserInfo = () => {
        axios.get("/userInfo").then(res =>{
            this.setState({
                userName: res.data[0].username,
                savedRecipes:res.data[0].savedRecipes
            })
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.userName}'s Page</h1>

                <ul>
                    {!this.state.savedRecipes?"You do not have any saved recipes at the moment":this.state.savedRecipes.map((recipe, i) => {
                        return (
                            <li key ={i}>
                                {recipe.dishname}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Dashboard;