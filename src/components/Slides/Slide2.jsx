import React from 'react';
import { Row, Col, Statistic } from 'antd';



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
                                    <Row>
                                          <Col span={24}>
                                                
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col span={12}>
                                          <div class="wrapper">
                                                <div class="right"></div>
                                                <div class="left"></div>
                                                <div class="middle">
                                                      <p>Active Users <br/> 112893</p>
                                                </div>
                                                <div class="popover"></div>
                                          </div> 
                                          </Col>
                                          <Col span={12}><Statistic title="Active Users" value={112893} /></Col>
                                    </Row>
                              </div>
                              
                        </Col>
                  </Row>
            </div>
      );
};

export default Slide2;