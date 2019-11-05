import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {

    componentDidMount = () => {
        // this.add()
      }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.test}</p>
        </header>
      </div>
    );
  }
}

export default Header;
