import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img
        src={this.props.src}
        alt={`mouth${this.props.src}`}
        onClick={this.props.onClick}
        onKeyPress={() => {}}
        role="presentation"
        id={this.props.id}
      />
    );
  }
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
