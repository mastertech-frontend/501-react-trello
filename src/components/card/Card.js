import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    
    return (
      <li className="Card">
        {this.props.text}
      </li>
    );
  }
}

export default Card;
