import React, { Component } from 'react';

class GoodRobot extends Component {
  render() {
    return (
      <h4>I hear you saying {this.props.greeting}. Is this correct?</h4>
    );
  }
}

export default GoodRobot;
