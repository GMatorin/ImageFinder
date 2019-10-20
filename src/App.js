import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { ImagesProvider } from './context';

class App extends Component {
  render() {
    return (
      <ImagesProvider>
        <div className='App'>
          <Navbar />

          <h1 className='m-3'>Content will be placed here...</h1>
        </div>
      </ImagesProvider>
    );
  }
}

export default App;
