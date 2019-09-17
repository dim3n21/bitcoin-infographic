import React from 'react';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';

import ChartDonut from '../Chart/ChartDonut';

const Slide3 = () => {
      return (
            <div className="popularity">
                  <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="popularity_left">
                                    <h2 className="popularity_left_header" >How popular is bitcoin?</h2>
                                    <p className="popularity_left_copy">In one day — on December 7, 2017 — there were 155.6K tweets about bitcoin. Even the lowest point, on January 8, 2018, saw 30.6K bitcoin tweets.</p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="popularity_right">
                                    <Row>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>something</div>
                                                <CountUp className="popularity_right_counter" style={{color: '#FF634D'}} end={56} />
                                                
                                          </Col>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>something</div>
                                                <CountUp
                                                      className="popularity_right_counter"
                                                      style={{color: '#FDD982'}}
                                                      end={56} />
                                                
                                          </Col>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>something</div>
                                                <CountUp
                                                      className="popularity_right_counter"
                                                      style={{color: '#95D2BA'}}
                                                      end={56} />
                                                
                                          </Col>
                                    </Row>
                                    <Row style={{padding: '2rem'}}>
                                          <Col span={24}>
                                                <ChartDonut />
                                          </Col>
                                    </Row>
                                    
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide3;