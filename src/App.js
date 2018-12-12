import React, { Component } from 'react';
import './App.css';
import GoodRobot from './GoodRobot.js'
import BadRobot from './BadRobot.js'
import KanyeRobot from './KanyeRobot.js'
import GreetingInput from './GreetingInput.js'



class App extends Component {
  constructor(props){
   super(props)
   this.state = {
     greeting: 'Bob'
   }
 }


updateGreeting(greeting){
    this.setState({greeting: greeting})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <h1>Good Robot</h1>
              <GoodRobot greeting={this.state.greeting} />
            </div>
            <div>
              <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
            </div>
          </div>
          <div>
            <div>
              <h1>Bad Robot</h1>
              <BadRobot greeting={this.state.greeting} />
            </div>
            <div>
              <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
            </div>
            <div>
              <h1>KanyeBot 5000+ Ultra</h1>
              <KanyeRobot greeting={this.state.greeting} />
            </div>
            <div>
              <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;


// loser code

//  updateGreeting(e){
//   this.setState({greeting: e.target.value})
// }


// <div>
//   <input value={this.state.greeting} onChange={this.updateGreeting.bind(this)} />
// </div>
