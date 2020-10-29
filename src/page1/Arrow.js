import React, { Component } from "react";
import Card from "./Card";
import "./page1.css";

class Arrow extends Component{
    constructor(props){
        super(props);
            this.state ={
                showCard : false,
            }
    }
    handleClickArrow = () =>{
        this.setState({
            showCard: true
        })
    }
    render(){
        return (
            <div className="arrow-wrapper">
                <img src="data:image/png;base64,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"
                alt ="Arrow" height="100px" width="100px" onClick={this.handleClickArrow}/>
                { this.state.showCard ? <Card /> : null }
            </div>
        )
    }
}
export default Arrow;