import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Item from '../Item/Item';

import mouths from '../../assets/mouth/index';

import './ItemsContainer.css';

function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.items); // eslint-disable-line no-alert
  }

  render() {
    let cols = [];
    const rows = mouths.map((src) => {
      cols.push(
        <Col xs={7} sm={4} key={ID()}>
          <Item
            src={src}
            onClick={this.handleClick}
            key={ID()}
          />
        </Col>,
      );
      if (cols.length >= 3) {
        const temp = cols.slice();
        cols = [];
        return <Row key={ID()}>{temp}</Row>;
      }
      return (null);
    });
    if (cols.length > 0) rows.push(<Row key={ID()}>{cols}</Row>);

    return (
      <div className="box-field">
        <div id="items-container">
          <Grid fluid>
            {rows}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ItemsContainer;
