import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

const Slide1 = () => {
      return (
            <div className="bitcoin">
                 <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="bitcoin_left">
                                    <h2 className="bitcoin_left_header">What is bitcoin?</h2>
                                    <p className="bitcoin_left_copy">The first digital currency and the largest to this day, bitcoin makes up 34% of the total value of all cryptocurrencies as of January 15, 2018.</p>
                              </div>
                        </Col>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="bitcoin_right">
                                    
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide1;