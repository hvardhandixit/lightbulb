import React from "react";

class TurnOffLight extends React.Component{
    render(){
        return(
            <div className="ToggleButton TurnOffButton" onClick={this.props.onClick}>Turn off!</div>
        )
    }
}

export default TurnOffLight;