import React, {Component} from 'react';
import './App.scss';

import Layout from './components/Layout/Layout';
import NavBar from './containers/NavBar/NavBar';
import CarouselComponent from './containers/CarouselComponent/CarouselComponent';
import { Menu } from 'antd';

class App extends Component {
  
  render() {

    return (
      <div className="App">
          <Layout>
            <CarouselComponent />
          </Layout>
      </div>
    );
  }
}

export default App;
