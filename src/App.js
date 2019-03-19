import React, { Component } from 'react';
import './App.css'
import GameOption from './GameOption'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='forcaGame'>
          Teste
          <GameOption />
        </div>
      </div>
    );
  }
}

export default App