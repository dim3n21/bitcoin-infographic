import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';
import Chart from '../Chart/ChartLine';

const Slide1 = () => {
      return (
            <div className="bitcoin">
                  
                 <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="bitcoin_left">
                                    <h2 className="bitcoin_left_header">Users worldwide.</h2>
                                    <p className="bitcoin_left_copy">The number of email users worldwide is forecasted to rise to  – <a  href="https://www.campaignmonitor.com"
                                                      style={{textDecoration: 'none',
                                                      color: '#FF634D'
                                                            }} target="_blank">4.6 billion by 2019.</a></p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="chart_title">
                                    {/*<span className="chart_title_header">Active users</span>*/}
                              </div>
                              
                              <div style={{padding: '1rem 1rem 0 1rem'}}>
                                    <Chart />
                              </div>
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide1;