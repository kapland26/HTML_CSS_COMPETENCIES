import React, { Component } from 'react';
import './box1_3.css';
import './box4_6.css';
import './media_query.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav>
            <li> Home </li>
            <li> Page 1 </li>
            <li> Page 2 </li>
        </nav>

        <div className="box-one">
          Div 1
          <input aria-describedby="enabled-input" />
        </div>

        <div className="box-two">
          <h1> Div 2 </h1>
        </div>

        <div className="box-three">
          <div className="elem"/>
          <div className="elem"/>
          <div className="elem"/>
        </div>

        <article>
          <h1>DENIZS COMPETENCIES</h1>
        </article>

        <section>
          <h2> About: This is a frankenstein app with (most of) Deniz's HTML/CSS competencies </h2>
        </section>

        <div id="box-four">
          <span>Div 4</span>
          <ul>
            <li> 1</li>
            <li> 2</li>
            <li> <a href="https://nauxpas.com/#/"> Link</a></li>
          </ul>
        </div>

        <div className="box-five">
          <p>Div 5</p>
          <input aria-describedby="disabled-input" disabled/>
        </div>

        <div className="box-six">
          <div className="grid-component"> <img src="https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SY355_.jpg" alt="smiley face COPMETENCY" height="42" width="42"/> </div>
          <div className="grid-component"/>
          <div className="grid-component"> Div 6 </div>
          <div className="grid-component" />
          <div className="grid-component"/>
          <div className="grid-component"/>
        </div>
        
        <footer><br/><br/>
          ------------------------- Here is a footer! ------------------------ ℗ Deniz Kaplan
        </footer>
      </div>      
    );
  }
}

export default App;
