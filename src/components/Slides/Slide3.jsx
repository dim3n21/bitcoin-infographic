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
                                    <h2 className="popularity_left_header" >Most popular email clients</h2>
                                    <p className="popularity_left_copy">Apple Mail and Gmail lead other email clients by a longshot. In fact, Gmail just announced they have surpassed 1.5 billion users on their platform.</p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="popularity_right">
                                    <Row>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>Gmail</div>
                                                <CountUp className="popularity_right_counter" style={{color: '#95D2BA'}} end={22.8} decimals={1} />
                                                
                                          </Col>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>iPhone</div>
                                                <CountUp
                                                      className="popularity_right_counter"
                                                      style={{color: '#FDD982'}}
                                                      end={15.5} decimals={1} />
                                                
                                          </Col>
                                          <Col span={8} align="center">
                                                <div style={{
                                                      paddingLeft: '10px',
                                                      marginBottom: '-15px'}}>Apple mail</div>
                                                <CountUp
                                                      className="popularity_right_counter"
                                                      style={{color: '#FF634D'}}
                                                      end={14} decimals={1} />
                                                
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