import React, { Component } from 'react';
import './box1_3.css';
import './box4_6.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box-one">
          Div 1
        </div>

        <div className="box-two">
          <h1> Div 2 </h1>
        </div>

        <div className="box-three">
          <div className="elem"/>
          <div className="elem"/>
          <div className="elem"/>
        </div>

        <div id="box-four">
          <span>Div 4</span>
        </div>

        <div className="box-five">
          <p>Div 5</p>
        </div>
      </div>
    );
  }
}

export default App;
