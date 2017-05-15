import React, { Component } from 'react';
import './ColorDiv.css';

class ColorDiv extends Component {
  render() {
    return (
      <div className="color-div" style={{
        backgroundColor: `${this.props.bgColor}`
      }}>
        <p>Hi, I'm a colored div!</p>
      </div>
    );
  }
}

export default ColorDiv;
