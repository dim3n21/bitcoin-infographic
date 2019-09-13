import React, { Component, Fragment } from 'react';

class NavBar extends Component {

      state = {
            slideNumber: null
      }

      updateSlideNumber = (n) => {
            this.setState({
                  ...this.state,
                  slideNumber: n
            })
      }

      render() {
            return (
                  <div className='navigation'>
                        <ul className="navigation_list">
                              <li className="navigation_list-item">
                                    <a 
                                          className="navigation_list-item-link"
                                          onClick={() => this.updateSlideNumber(1)}
                                          >Audience</a></li>

                              <li className="navigation_list-item">
                                    <a 
                                          className="navigation_list-item-link"
                                          onClick={() => this.updateSlideNumber(2)}
                                    >
                                                Popularity </a></li>

                              <li className="navigation_list-item">
                                    <a 
                                          className="navigation_list-item-link"
                                          onClick={() => this.updateSlideNumber(3)}
                                    >
                                          Mining</a></li>
                              <li className="navigation_list-item">
                                    <a 
                                          className="navigation_list-item-link"
                                          onClick={() => this.updateSlideNumber(4)}
                                    >
                                          Fun facts</a></li>
                        </ul>
                  </div>
               
            );
      }
}

export default NavBar;