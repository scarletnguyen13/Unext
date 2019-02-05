import React, { Component } from 'react';

import AvatarContainer from '../AvatarContainer/AvatarContainer';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

import './AvatarMaker.css';

class AvatarMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="customized-row">
        <AvatarContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default AvatarMaker;
