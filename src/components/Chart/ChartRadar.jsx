import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

class ChartRadar extends Component {

      state = {
            chartData: {
                  labels: ['Mobile', 'Desktop'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: ['#FDD982','#95D2BA'],
      borderColor: '#fff',
      pointBackgroundColor: '#FF634D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FF634D',
      data: [43,57]
    }
  ]
            }
      }

      render() {
            return (
                  <div className="chart" style={{padding: '1rem'}}>
                       <Polar
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
                                    scale: {
                                          display: false
                                    }
                                    
                              }}
                        />
                  </div>
            );
      }
}

export default ChartRadar;