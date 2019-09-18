import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class ChartDonut extends Component {

      state = {
            chartData: {
                  labels: [ 'Gmail', 'iPhone', 'Apple Mail', 'Oulook 2013'],
                  datasets:[
                    {
                        label: false,
                      data:[
                        22.8,
                        15.5,
                        14,
                        4.7
                      ],
                      backgroundColor:[
                        '#95D2BA',
                        '#FDD982',
                        '#FF634D',
                        '#D8C3A5'
                      ],
                      borderColor: [

                      ],
                      borderWidth: 5
                    }
                  ]  
            }
      }

      render() {
            return (
                  <div className="chart" style={{padding: '1rem'}}>
                       <Doughnut
                              data={this.state.chartData}
                              options={{
                                   legend: {
                                          display: false
                                      }
                              }}
                        />
                  </div>
            );
      }
}

export default ChartDonut;