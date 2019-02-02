import React, { Component } from 'react';
import AvatarContainer from './components/AvatarContainer/AvatarContainer';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='customized-row'>
        <AvatarContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default App;
