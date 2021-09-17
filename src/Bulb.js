import React from 'react';
import ReactDOM from 'react-dom';
import lightOnImage from './light-bulb.png';
import lightOffImage from './light-bulb (1).png';
import TurnOffLight from './TurnOffLight';

class Bulb extends React.Component{
  constructor(){
    this.state = {background: '#000000', lightsOn: false};
  }

  handleTurnOff() {
    this.setState({background: '#000000', lightsOn: false});
  }

  handleTurnOn(){
    this.setState({background:'#ffe07d', lightsOn: true});
  }

  render(){
    let isLightOn = this.state.lightsOn;
    let bulb;
    let button;
    if(isLightOn){
      bulb = <img src={lightOnImage} />
      button = <TurnOffLight onClick={this.handleTurnOn}/>
    }
    else{
      bulb = <img src={lightOffImage} />
      button = <TurnOnLight onClick={this.handleTurnOff}/>
    }
    return(
      <div className='container'>
        {bulb}
        {button}
      </div>
    )
  }

}