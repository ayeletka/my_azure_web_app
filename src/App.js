import React, { Component } from 'react';
import insta from './instagramPic.jpeg';
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
            <img src={insta} className="App-logo" alt="insta" />
            <h1 className="App-title">Welcome to Ayelet's instagram searcher web</h1>
          </header>
          <p className="App-intro">
  			     Enter the artist you love and get a link to his instagram account
          </p>
          <Search/>
          <Result/>
          <div className="history">
          <div className="header">
            <p>History</p>
            <hr/>
          </div>
          <div className="history-table">
            <History/>
          </div>
          </div>
          </div>
      );
    }
}

export default App;
