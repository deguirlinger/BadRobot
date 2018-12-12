import React, { Component } from 'react';

class BadRobot extends Component {

  blah(str) {
    var newArr = []
    var arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
      if (i % 4 === 0) {
        newArr.push("B")
      } else if (i % 4 === 1) {
        newArr.push("L")
      } else if (i % 4 === 2) {
        newArr.push("A")
      } else {
        newArr.push("H")
      }
    }
    return newArr.join("")
  }


  render() {
    return (
      <h4>I hear you saying {this.blah(this.props.greeting)}. Is this correct?</h4>
    );
  }
}

export default BadRobot;
