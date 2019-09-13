import React, { Component } from 'react';
import Slider from "react-slick";

import Slide1 from '../../components/Slides/Slide1';

class CarouselComponent extends Component {
      state = {
            slideIndex: 0,
          };
        
          render() {
            const settings = {
              dots: false,
              infinite: true,
              speed: 800,
              slidesToShow: 1,
              slidesToScroll: 1,
              beforeChange: (current, next) => this.setState({ slideIndex: next })
            };
            return (
              <div>
                <input
                  onChange={e => this.slider.slickGoTo(e.target.value)}
                  value={this.state.slideIndex}
                  type="range"
                  min={0}
                  max={3}
                />
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                  <Slide1 />
                  <div>
                  <h1>2</h1>
                  </div>
                  <div>
                  <h1>3</h1>
                  </div>
                  <div>
                  <h1>4</h1>
                  </div>
                </Slider>
              </div>
            );
          }
}

export default CarouselComponent;