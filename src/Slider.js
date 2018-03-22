import React from 'react';
import Slider from 'react-slick';

const Responsive = function(props) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
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
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>1</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>2</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>3</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>4</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>5</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>6</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>7</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>8</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>9</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>10</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>11</h3>
        </div>
        <div>
          <img
            src={
              'https://unsplash.it/300/' +
              props.randomHeight(300, 900) +
              '?image=' +
              props.randomImage()
            }
            className="App-images"
            alt="unsplash random"
          />
          <h3>12</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Responsive;
