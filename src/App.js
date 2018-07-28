import React, { Component } from 'react';
import me from './me.jpg';
import './App.css';
import Search from './Search/Search';
import Result from './Result/Result';

class App extends Component {
  state = {
    val: '',
    link: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={me} className="App-logo" alt="me" />
          <h1 className="App-title">Welcome to Ayelet's web</h1>
        </header>
        <p className="App-intro">
			I will finish it all by the end of the day!!.
        </p>
        <Search />
        <Result
        />
      </div>
    );
  }
}

export default App;
