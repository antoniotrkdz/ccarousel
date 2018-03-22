import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import logo from './logo.svg';
import './App.css';

const Owl = ({randomImage, randomHeight}) =>
  <div className="App">
    <header className="App-header">
      <div className="App-header-images">
        <img src={logo} className="App-logo" alt="react logo" />
        <h1 className="App-title">+</h1>
        <img
          src="http://owlcarousel2.github.io/OwlCarousel2/assets/img/owl-logo.png"
          className="App-logo-nospin"
          alt="owl logo"
        />
      </div>
      <h1 className="App-title">
        Welcome to<br />
        Antonio Trabalza's skills test for Cantiere Creativo
      </h1>
    </header>
    <div className="App-container">
      <h4 className="App-name">
        This is{' '}
        <a href="https://www.npmjs.com/package/react-owl-carousel3">
          react-owl-carousel3
        </a>{' '}
        go to <Link to={process.env.PUBLIC_URL + '/slick'}>React Slick</Link>
      </h4>
      <OwlCarousel className="owl-theme" lazyLoad loop margin={10} nav>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>1</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>2</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>3</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>4</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>5</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>6</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>7</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>8</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>9</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>10</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>11</h3>
        </div>
        <div className="item">
          <img
            src={
              'https://unsplash.it/300/' +
              randomHeight(300, 900) +
              '?image=' +
              randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>12</h3>
        </div>
      </OwlCarousel>
    </div>
  </div>;

export default Owl;
