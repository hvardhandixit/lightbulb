import React from "react";

class TurnOnLight extends React.Component{
    render(){
        return(
            <div className="ToggleButton TurnOnButton" onClick={this.props.onClick}>Turn on!</div>
        )
    }
}

export default TurnOnLight;