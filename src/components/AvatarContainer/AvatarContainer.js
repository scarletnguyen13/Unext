import React, { Component } from 'react';
import avatar from '../../assets/avatar.png';
import './AvatarContainer.css';

class AvatarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box-field">
        <img src={avatar} alt="avatar" />
      </div>
    );
  }
}

export default AvatarContainer;
