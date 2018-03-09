import React, {Component} from 'react';
import Responsive from './Slider.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchImages = this.fetchImages.bind(this);
    this.randomImage = this.randomImage.bind(this);

    this.state = {
      images: [],
    };
  }

  fetchImages() {
    const url = new URL('https://unsplash.it/list');

    fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
          images: response,
        })
      )
      .catch(error => console.log('Fetch operation failed: ' + error.message));
  }

  randomImage() {
    if (this.state.images.length > 0) {
      var ids = this.state.images.map(item => item.id);
      return ids[Math.floor(Math.random() * ids.length)];
    }
  }

  componentWillMount() {
    this.fetchImages();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-images">
            <img src={logo} className="App-logo" alt="react logo" />
            <h1 className="App-title">+</h1>
            <h1 className="App-logo-slick">slick</h1>
          </div>
          <h1 className="App-title">
            Welcome to<br />
            Antonio Trabalza skills test for Cantiere Creativo
          </h1>
        </header>
        <div className="App-container">
          <Responsive
            randomImage={this.randomImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
