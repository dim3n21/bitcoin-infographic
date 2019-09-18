import React from 'react';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';

import ChartRadar from '../Chart/ChartRadar';

const Slide4 = () => {
      return (
            <div className="desktop_mobile">
                  <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="desktop_mobile_left">
                                    <h2 className="desktop_mobile_left_header" >Desktop VS Mobile</h2>
                                    <p className="desktop_mobile_left_copy">About 63% of emails are opened on mobile devices. – <a     href="https://www.campaignmonitor.com"
                                                      style={{textDecoration: 'none',
                                                      color: '#FF634D'
                                                            }} target="_blank">Campaign Monitor</a></p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="desktop_mobile_right">
                                    <Row>
                                          <Col span={24}>
                                                <ChartRadar />
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col span={12} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>Mobile</div>
                                                <CountUp className="desktop_mobile_right_counter" style={{color: '#95D2BA'}} end={57} />
                                                
                                          </Col>
                                          <Col span={12} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>Desktop</div>
                                                <CountUp
                                                      className="desktop_mobile_right_counter"
                                                      style={{color: '#FDD982'}}
                                                      end={43} />
                                                
                                          </Col>
                                    </Row>
                                    
                                    
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide4;