import React from 'react';
import {Link} from 'react-router-dom';
import Responsive from './Slider.js';
import logo from './logo.svg';
import './App.css';

const Slick = ({randomImage, randomHeight}) =>
  <div className="App">
    <header className="App-header">
      <div className="App-header-images">
        <img src={logo} className="App-logo" alt="react logo" />
        <h1 className="App-title">+</h1>
        <h1 className="App-logo-slick">slick</h1>
      </div>
      <h1 className="App-title">
        Welcome to<br />
        Antonio Trabalza&apos;s skills test for Cantiere Creativo
      </h1>
    </header>
    <div className="App-container">
      <h4 className="App-name">
        This is <a href="https://react-slick.neostack.com/">React Slick</a> go
        back to{' '}
        <Link to={process.env.PUBLIC_URL + '/'}>react-owl-carousel3</Link>
      </h4>
      <Responsive
        randomImage={randomImage}
        randomHeight={randomHeight}
      />
    </div>
  </div>;

export default Slick;
