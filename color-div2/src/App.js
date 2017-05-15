import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorDiv from './components/ColorDiv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'red',
    }

    this.handleColorInputChange = this.handleColorInputChange.bind(this);
  }

  handleColorInputChange(event) {
    this.setState({bgColor: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={this.state.bgColor}
              onChange={this.handleColorInputChange}
            />
          </label>
        </form>
        <ColorDiv bgColor={this.state.bgColor} />
      </div>
    );
  }
}

export default App;
