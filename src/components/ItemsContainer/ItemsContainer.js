import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Item from '../Item/Item';

import './ItemsContainer.css';

const array = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];

class ItemsContainer extends Component {
  render() {
    let cols = [];
    let rows = array.map(i => {
      cols.push(<Col xs={7} sm={4}><Item src={require(`../../assets/mouth/mouth-${i}.png`)}/></Col>);
      if (cols.length >= 3) {
        let temp = cols.slice();
        cols = [];  
        return <Row>{temp}</Row>
      } else {
        return (null);
      }
    });
    
    return(
      <div className='box-field'>
        <div id='items-container'>
          <Grid fluid>
           {rows}
          </Grid>
        </div>
      </div>
    );
  }
} 

export default ItemsContainer;