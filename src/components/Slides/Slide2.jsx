import React from 'react';
import { Row, Col } from 'antd';



const Slide2 = () => {

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
                                    <Row style={{padding: '2rem'}}>
                                          <Col span={12}>
                                          <div class="wrapper">
                                                <div class="right"></div>
                                                <div class="left"></div>
                                                <div class="middle">
                                                      <p style={{lineHeight: '2.3rem'}}><span
                                                      style={{
                                                            fontSize: '0.9rem'
                                                            }}>B2B</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      78%</span></p>
                                                </div>
                                                <div class="popover"></div>
                                          </div> 
                                          </Col>
                                          <Col span={12}>
                                          <div class="wrapper">
                                                <div class="right"></div>
                                                <div class="left"></div>
                                                <div class="middle">
                                                      <p style={{lineHeight: '2.3rem'}}><span
                                                      style={{
                                                            fontSize: '0.9rem'
                                                            }}>B2C</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      82%</span></p>
                                                </div>
                                                <div class="popover"></div>
                                          </div> 
                                          </Col>
                                    </Row>
                                    <Row style={{padding: ' 0rem 2rem',
                                                margin: '0 25%'}}>
                                          <Col span={24}>
                                          <div class="wrapper">
                                                <div class="right"></div>
                                                <div class="left"></div>
                                                <div class="middle">
                                                      <p style={{lineHeight: '2.3rem'}}><span
                                                      style={{
                                                            fontSize: '0.9rem'
                                                            }}>People</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      63</span></p>
                                                </div>
                                                <div class="popover"></div>
                                          </div> 
                                          </Col>
                                    </Row>
                                    
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide2;