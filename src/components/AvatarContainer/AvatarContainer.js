import React, { Component } from 'react';
// import body from '../../assets/body.png';
import face from '../../assets/face.png';
import shirt from '../../assets/shirt.png';
import './AvatarContainer.css';

import mouths from '../../assets/mouth/index';

class AvatarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouth: mouths[4],
    };
    this.changeMouth = this.changeMouth.bind(this);
  }

  changeMouth(newMouth) {
    this.setState({ mouth: newMouth.target.value });
  }

  render() {
    return (
      <div className="box-field">
        {/* <div className="body-container">
          <img src={body} alt="body" />
        </div> */}
        <div id="shirt-container">
          <img src={shirt} alt="shirt" />
        </div>
        <div id="face-container">
          <img src={face} alt="face" />
        </div>
        <div id="mouth-container">
          <img src={this.state.mouth} alt="mouth" />
        </div>
      </div>
    );
  }
}

export default AvatarContainer;
