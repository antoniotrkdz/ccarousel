import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchImages = this.fetchImages.bind(this);

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
          images: response
        })
      )
      .then(log => console.log('image url', this.state))
      .catch(error => console.log('Fetch operation failed: ' + error.message));
  }

  componentWillMount() {
    this.fetchImages();
  }

  render() {
    const randomImage = this.state.images.length > 1 
      ? Math.floor(Math.random() * this.state.images.length)
      : null;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-images">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">+</h1>
            <img
              src="http://owlcarousel2.github.io/OwlCarousel2/assets/img/owl-logo.png"
              className="App-logo-nospin"
              alt="logo"
            />
          </div>
          <h1 className="App-title">
            Welcome to<br />
            Antonio Trabalza skills test for Cantiere Creativo
          </h1>
        </header>
        <div>
          <img src={"https://unsplash.it/300?image=" + randomImage} alt="" />
        </div>
      </div>
    );
  }
}

export default App;
