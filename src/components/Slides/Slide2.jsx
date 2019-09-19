import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import Circle from 'react-colorful-circle'
import { Line, Circle } from 'rc-progress';

class Slide2 extends Component {

      constructor() {
            super();
            this.state = {
              percent1: 0,
              percent2: 0,
              percent3: 0,
            };
            this.increase = this.increase.bind(this);
            this.increase2 = this.increase2.bind(this);
            this.increase3 = this.increase3.bind(this);
          }  
      
          componentDidMount() {
            this.increase();
            this.increase2();
            this.increase3();
          }
        
          increase() {
            const { percent1 } = this.state;
            const newPercent = percent1 + 1;
            if (newPercent >= 85) {
              clearTimeout(this.tm);
              return;
            }
            this.setState({ percent1: newPercent });
            this.tm = setTimeout(this.increase, 1);
          }

          increase2() {
            const { percent2 } = this.state;
            const newPercent2 = percent2 + 1;
            if (newPercent2 >= 95) {
              clearTimeout(this.tm);
              return;
            }
            this.setState({ percent2: newPercent2 });
            this.tm = setTimeout(this.increase2, 15);
          }

          increase3() {
            const { percent3 } = this.state;
            const newPercent3 = percent3 + 1;
            if (newPercent3 >= 53) {
              clearTimeout(this.tm);
              return;
            }
            this.setState({ percent3: newPercent3 });
            this.tm = setTimeout(this.increase3, 20);
          }
      
      render () {
            const { percent1, percent2, percent3 } = this.state;
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
                                                            <span style={{
                                                                  display: 'block',
                                                                  fontSize: '1rem'
                                                            }}>B2B</span>
                                                            {`${percent1}%`}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent1} />         
                                                </div>
                                                </Col>
                                                <Col xxl={12} sm={12} xs={12} style={{padding: '1rem'}} align="center">
                                                <div className="pcircle">
                                                      <div className="pcircle_percentage">
                                                      <span style={{
                                                                  display: 'block',
                                                                  fontSize: '1rem'
                                                            }}>B2C</span>
                                                            {`${percent2}%`}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent2} />         
                                                </div>
                                                </Col>
                                          </Row>
                                          <Row>
                                                <Col xxl={24} sm={24} xs={24} style={{padding: '1rem'}} align="center">
                                                <div className="pcircle">
                                                      <div className="pcircle_percentage">
                                                      <span style={{
                                                                  display: 'block',
                                                                  fontSize: '1rem'
                                                            }}>Customers</span>
                                                            {`${percent3}%`}                     
                                                      </div>
                                                      <Circle
                                                            strokeWidth="7"
                                                            strokeColor="#95D2BA"
                                                            trailWidth="7"
                                                            trailColor="#FDD982"
                                                            percent={percent3} />         
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