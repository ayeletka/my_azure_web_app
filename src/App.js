import React, { Component } from 'react';
import me from './me.jpg';
import './App.css';
import Search from './Search/Search';
import Result from './Result/Result';
import History from './History/History';


class App extends Component {
    constructor(props) {
      super(props);
  }

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={me} className="App-logo" alt="me" />
          <h1 className="App-title">Welcome to Ayelet's web</h1>
        </header>
        <p className="App-intro">
			I will finish it all by the end of the day!!!.
        </p>
        <Search />
        <Result
        />
        <div className="history">
        <div className="header">
          <p>History</p>
          <hr/>
        </div>
        <div className="history-table">
          <History
          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
