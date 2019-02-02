import React, { Component } from 'react';
import avatar from '../../assets/avatar.png';
import './AvatarContainer.css';

class AvatarContainer extends Component {
  render() {
    return(
      <div className='box-field'>
        <img src={avatar} alt='avatar'></img>
      </div>
    );
  }
} 

export default AvatarContainer;