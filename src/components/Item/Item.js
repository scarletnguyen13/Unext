import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
  render() {
    return (
      <img 
        src={this.props.src} 
        alt={"mouth" + this.props.src} 
        onClick={this.props.onClick}
      />
    );
  }
}

export default Item;