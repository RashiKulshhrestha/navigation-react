import React, { Component } from "react";
import Sources from "./Sources";
import "./page1.css";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            showSources : false,
            facebook : false
        }
    }
    handleClick = () =>{
        this.setState({
            showSources: true
        })
        
    }
    
    showSourcesFalse = () => {
        this.setState({
            showSources: false
        })
    }
    render(){
        return(
            <div>
                <nav>
                    <button className="manage-source-btn" onClick={this.handleClick}>Manage Source</button>
                    <button className="manage-team-btn" onClick={this.showSourcesFalse}>Manage Team</button>
                </nav>
                { this.state.showSources ? <Sources /> : null }
            </div>
        )
    }
}
export default Dashboard;