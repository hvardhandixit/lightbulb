import React from 'react';
import ReactDOM from 'react-dom';
import lightOnImage from './light-bulb.png';
import lightOffImage from './light-bulb (1).png';
import TurnOffLight from './TurnOffLight';
import TurnOnLight from './TurnOnLight';

class Bulb extends React.Component{
  constructor(){
    super();
    this.state = {background: '#ffe07d', lightsOn: true};
    this.handleTurnOff = this.handleTurnOff.bind(this);
    this.handleTurnOn = this.handleTurnOn.bind(this);
  }

  handleTurnOff() {
    this.setState({background: '#000000'});
    this.setState({lightsOn: false});
  }

  handleTurnOn(){
    this.setState({background:'#ffe07d'});
    this.setState({lightsOn: true});
  }

  render(){
    let isLightOn = this.state.lightsOn;
    let bulb;
    let button;
    if(isLightOn){
      bulb = <img src={lightOnImage} alt='light-img'/>
      button = <TurnOffLight onClick={this.handleTurnOff}/>
    }
    else{
      bulb = <img src={lightOffImage} alt='light-img'/>
      button = <TurnOnLight onClick={this.handleTurnOn}/>
    }
    return(
      <div className='container' style={{background:this.state.background }}>
        {bulb}
        {button}
      </div>
    )
  }

}

export default Bulb;