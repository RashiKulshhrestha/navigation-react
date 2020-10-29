import React, { Component } from "react";
import "./page1.css";

class Card extends Component {
    constructor(props){
        super(props);
            this.state ={
                showOption1 : true,
                showOption2 : true,
                showIngestion: false
            }
    }
handleClick1 = () =>{
    this.setState({
        showOption1 : false
    })
}
handleClick2 = () =>{
    this.setState({
        showOption2 : false
    })
}
handleIngestion = () => {
    this.setState({
        showIngestion : true
    })
}
    render(){
        return(
            <div>
                <div className="card-wrapper">
                <img src="data:image/png;base64,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"
                    alt ="facebook" height="50px" width="50px"/>
                
                <div>UserName</div>
                <div>
                    { this.state.showOption1? <div>
                    <div>Unicef</div>
                    <img src = "https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" alt="close" 
                        height="20px" width="20px" onClick={this.handleClick1}/>
                    </div> : null }
                    
                    { this.state.showOption2? <div>
                        <div>Who</div>
                        <img src = "https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" alt="close" 
                            height="20px" width="20px" onClick={this.handleClick2}/>
                        
                    </div> : null }
                </div>
                
            </div>
            <div>
                <button onClick={this.handleIngestion}>Procced for Ingestion</button>
                {this.state.showIngestion ? <div>
                    <button>Start Ingestion</button>
                </div> : null}
            </div>
            <img src="data:image/png;base64,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"
                    alt="youtube" width="50px" height="50px"/>
                <div>Youtube</div>
            </div>
            
            
        )
    }
}
export default Card;