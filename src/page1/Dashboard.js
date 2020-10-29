import React, { Component } from "react";
import Sources from "./Sources";

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
                    <button onClick={this.handleClick}>Manage Source</button>
                    <button onClick={this.showSourcesFalse}>Manage Team</button>
                </nav>
                { this.state.showSources ? <Sources /> : null }
            </div>
        )
    }
}
export default Dashboard;