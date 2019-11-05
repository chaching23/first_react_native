import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {
  state ={
    count: 0
  }

  componentDidMount = () => {
    this.add()
  }


  add = () => {
    let num = this.state.count +1 
    this.setState({count: num })
  }

  minus = () => {
    let num = this.state.count -1 
    this.setState({count: num })
  }

render() {
    return (
        <div>
          <Header test={this.state.test} />
            <p>How many apps can we build? {this.state.count}</p>
            <button onClick={() => this.add()}>add </button>
            <button onClick={() => this.minus()}>minus </button>
        </div>
    );
  }
}

export default App;
