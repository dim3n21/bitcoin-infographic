import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import Circle from 'react-colorful-circle'
import { Line, Circle } from 'rc-progress';

class Slide2 extends Component {

      constructor() {
            super();
            this.state = {
              percent: 0,
            };
            this.increase = this.increase.bind(this);
          }  
      
          componentDidMount() {
            this.increase();
          }
        
          increase() {
            const { percent } = this.state;
            const newPercent = percent + 1;
            if (newPercent >= 65) {
              clearTimeout(this.tm);
              return;
            }
            this.setState({ percent: newPercent });
            this.tm = setTimeout(this.increase, 10);
          }
      
      render () {
            const { percent } = this.state;
            return (
                  <div className="audience">
                       <Row>
                              <Col lg={{span: 12}} sm={{span: 24}}>
                                    <div className="audience_left">
                                          <h2 className="audience_left_header">Email Automation</h2>
                                          <p className="audience_left_copy">Transactional emails have 8x more opens and clicks than any other type of email and can generate 6x more revenue.</p>
                                    </div>
                              </Col>
                              <Col lg={{span: 12}} sm={{span: 24}}>
                                    <div className="audience_right">
                                          <Row>
                                                <Col xxl={12} sm={12} xs={12} style={{padding: '1rem'}} align="center">
                                                <div className="pcircle">
                                                      <div className="pcircle_percentage">
                                                            {percent}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent} />         
                                                </div>
                                                </Col>
                                                <Col xxl={12} sm={12} xs={12} style={{padding: '1rem'}} align="center">
                                                <div className="pcircle">
                                                      <div className="pcircle_percentage">
                                                            {percent}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent} />         
                                                </div>
                                                </Col>
                                          </Row>
                                          <Row>
                                                <Col xxl={24} sm={24} xs={24} style={{padding: '1rem'}} align="center">
                                                <div className="pcircle">
                                                      <div className="pcircle_percentage">
                                                            {percent}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent} />         
                                                </div>
                                                </Col>
                                          </Row>
                                          
                                    </div>
                                    
                              </Col>
                        </Row>
                  </div>
            );
      }
      
};

export default Slide2;