import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { ImagesProvider } from './context';
import FoundImages from './components/foundImages/FoundImages';

class App extends Component {
  render() {
    return (
      <ImagesProvider>
        <div className='App'>
          <Navbar />
          <MuiThemeProvider>
            <FoundImages />
          </MuiThemeProvider>
        </div>
      </ImagesProvider>
    );
  }
}

export default App;
