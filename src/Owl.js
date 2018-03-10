import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import logo from './logo.svg';
import './App.css';

class Owl extends Component {
  render() {
    return (
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
            go to{' '}
            <Link to={'/slick'}>React Slick</Link>
          </h4>
          <OwlCarousel className="owl-theme" lazyLoad loop margin={10} nav>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>1</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>2</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>3</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>4</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>5</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>6</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>7</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>8</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>9</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>10</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>11</h4>
            </div>
            <div className="item">
              <img
                src={'https://unsplash.it/300?image=' + this.props.randomImage()}
                className="App-images"
                alt="unsplash random"
              />
              <h4>12</h4>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owl;
