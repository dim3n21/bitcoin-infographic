import React, { Component } from 'react';
import Slider from "react-slick";

import Slide1 from '../../components/Slides/Slide1';
import Slide2 from '../../components/Slides/Slide2';
import Slide3 from '../../components/Slides/Slide3';
import Slide4 from '../../components/Slides/Slide4';
import { blockStatement } from '@babel/types';


class Main extends Component {

      state = {
            slideNumber: null,
            slideIndex: 0,
      }

      updateSlideNumber = (n) => {
            this.setState({
                  ...this.state,
                  slideNumber: n,
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
                        <div className='logo'>
                              Email Marketing Statistic</div>
                        <div className='navigation'>
                              <ul className="navigation_list">
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(0)} >
                                                Openings</a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(1)} >
                                                Clients </a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(2)} >
                                                Users </a>
                                    </li>
                                    <li className="navigation_list-item">
                                          <a    
                                                className="navigation_list-item-link"
                                                onClick={() => this.updateSlideNumber(3)} >
                                                Automation </a>
                                    </li>
                              </ul>
                        </div>
                        <div>
                              <Slider ref={slider => (this.slider = slider)} {...settings}>
                                          <Slide4 />
                                          <Slide3 />
                                          <Slide1 />
                                          <Slide2 />
                                          
                              </Slider>
                        </div>
                  </div>
            );
      }
}

export default Main;