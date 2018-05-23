import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
