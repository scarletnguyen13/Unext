import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
  render() {
    return (
      <img src={this.props.src} alt=""/>
    );
  }
}

export default Item;