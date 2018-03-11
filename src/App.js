import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Owl from './Owl.js';
import Slick from './Slick.js';
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
    console.log('publicUrl', process.env.PUBLIC_URL)
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={() =>
                <Owl
                  fetchImages={this.fetchImages}
                  randomImage={this.randomImage}
                />}
            />
            <Route
              path="/slick"
              component={() =>
                <Slick
                  fetchImages={this.fetchImages}
                  randomImage={this.randomImage}
                />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
