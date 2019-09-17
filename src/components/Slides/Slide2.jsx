import React from 'react';
import { Row, Col } from 'antd';



const Slide2 = () => {

      return (
            <div className="audience">
                 <Row>
                        <Col lg={{span: 12}} sm={{span: 24}}>
                              <div className="audience_left">
                                    <h2 className="audience_left_header">Who uses bitcoin?</h2>
                                    <p className="audience_left_copy">It can be used to buy or sell items from people and companies that accept bitcoin as payment, but it differs in several key ways from traditional currencies.</p>
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
                                                            }}>35 y.o</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      60%</span></p>
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
                                                            }}>Men</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      91%</span></p>
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
                                                            }}>U.S</span> <br/><span style={{
                                                            fontSize: '2.5rem',
                                                            fontWeight: '700'}}>
                                                      64%</span></p>
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