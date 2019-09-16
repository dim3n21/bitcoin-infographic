import React, { Component } from 'react';
import Slider from "react-slick";
import Slide2 from '../../components/Slides/Slide2';

class Main extends Component {

      state = {
            slideNumber: null,
            slideIndex: 0
      }

      updateSlideNumber = (n) => {
            this.setState({
                  ...this.state,
                  slideNumber: n
            })
            this.slider.slickGoTo(n);

      }

      render() {

            const settings = {
                  dots: false,
                  fade: true,
                  lazyLoad: true,
                  infinite: true,
                  speed: 800,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  beforeChange: (current, next) => this.setState({ slideIndex: next })
            };      

            return (
                  <div className="App">
                        <div className='navigation'>
                              <ul className="navigation_list">
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(0)} >
                                                Aidience </a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(1)} >
                                                Popularity </a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(2)} >
                                                Mining </a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(3)} >
                                                Fun Facts </a>
                                    </li>
                              </ul>
                        </div>
                        <div>
                              <Slider ref={slider => (this.slider = slider)} {...settings}>
                                          <Slide2 />
                                          <Slide2 />
                                          <Slide2 />
                                          <Slide2 />
                              </Slider>
                        </div>
                  </div>
            );
      }
}

export default Main;