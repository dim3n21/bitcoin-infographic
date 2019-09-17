import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

class ChartRadar extends Component {

      state = {
            chartData: {
                  labels: ['Eating', 'Drinking'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#FF634D',
      borderColor: '#fff',
      pointBackgroundColor: '#FF634D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FF634D',
      data: [65, 11]
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#95D2BA',
      borderColor: '#fff',
      pointBackgroundColor: '#95D2BA',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#95D2BA',
      data: [28, 48]
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