import React from 'react';
import AvatarContainer from './components/AvatarContainer/AvatarContainer';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';
import './App.css';

function App() {
  return (
    <div className="customized-row">
      <AvatarContainer />
      <ItemsContainer />
    </div>
  );
}

export default App;
