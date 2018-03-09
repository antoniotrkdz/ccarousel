import React, {Component} from 'react';
import Slider from 'react-slick';
import '../node_modules/slick-carousel/slick/slick.css'; 
import '../node_modules/slick-carousel/slick/slick-theme.css';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>1</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>2</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>3</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>4</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>5</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>6</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>7</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>8</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>9</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>10</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>11</h3>
          </div>
          <div>
            <img
              src={'https://unsplash.it/300?image=' + this.props.randomImage()}
              className="App-images"
              alt="unsplash random"
            />
            <h3>12</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
