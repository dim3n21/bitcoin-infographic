import React from 'react';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';

import ChartRadar from '../Chart/ChartRadar';

const Slide4 = () => {
      return (
            <div className="popularity">
                  <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="popularity_left">
                                    <h2 className="popularity_left_header" >What about mining?</h2>
                                    <p className="popularity_left_copy">Average bitcoin mining difficulty has increased more than sixfold in the last year, from 336.8999G on January 14, 2017, to 2.2278T on January 14, 2018.</p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="popularity_right">
                                    <Row style={{padding: '2rem'}}>
                                          <Col span={24}>
                                                <ChartRadar />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col span={12} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>something</div>
                                                <CountUp className="popularity_right_counter" style={{color: '#FF634D'}} end={56} />
                                                
                                          </Col>
                                          <Col span={12} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>something</div>
                                                <CountUp
                                                      className="popularity_right_counter"
                                                      style={{color: '#FDD982'}}
                                                      end={56} />
                                                
                                          </Col>
                                    </Row>
                                    
                                    
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide4;