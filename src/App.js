import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-images">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">+</h1>
            <img src="https://avatars3.githubusercontent.com/u/18146764?s=400&v=4" className="App-logo-nospin" alt="logo" />
          </div>
          <h1 className="App-title">Welcome to<br/>
            Antonio Trabalza skills test for Cantiere Creativo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
