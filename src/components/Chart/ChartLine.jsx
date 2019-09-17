import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ChartLine extends Component {

      state = {
            chartData: {
                  labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
                  datasets:[
                    {
                        label: false,
                      data:[
                        9,
                        3,
                        25,
                        23,
                        49,
                        21
                      ],
                      backgroundColor:[
                        '#fff'
                      ],
                      borderColor: [
                        '#95D2BA'
                      ],
                      borderWidth: 5
                    }
                  ]  
            }
      }

      render() {
            return (
                  <div className="chart" style={{padding: '1rem'}}>
                       <Line
                              data={this.state.chartData}
                              options={{
                                   
                                    legend: {
                                          display: false
                                      },
                                      tooltips: {
                                          callbacks: {
                                             label: function(tooltipItem) {
                                                    return tooltipItem.yLabel;
                                             }
                                          }
                                      },
                                      scales: {
                                          yAxes: [{ display : false }],
                                          xAxes: [{
                                                      display : false
                                    
                                          }]
                                    }
                              }}
                        />
                  </div>
            );
      }
}

export default ChartLine;