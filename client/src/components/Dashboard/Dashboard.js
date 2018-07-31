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
            <div className="dashboard">
                <img className="dashboardImg" src="./assets/images/dashboard.png" alt="dashboard" />
                <h1 className="savedTitle"><u>Saved Recipes</u></h1>
                    <ul className="savedRecipes">
                        {!this.state.savedRecipes?"You do not have any saved recipes at the moment":this.state.savedRecipes.map((recipe, i) => {
                            return (
                                <li  className="" key ={i}>
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