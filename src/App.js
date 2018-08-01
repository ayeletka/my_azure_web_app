import React, { Component } from 'react';
import historyApi from './History/HistoryApi';
import insta from './instagramPic.jpeg';
import Search from './Search/Search';
import Result from './Result/Result';
import History from './History/History';
import axios from 'axios';
import './App.css';

const API_KEY = '09ba53a3ba8243f68eb5374bbcad64c0'
const API_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          jsonArrayHistory: undefined,
          link : ''
      };
      this.updateHistoryState();
    }

     updateHistoryState = () => {
        historyApi.getAllBlobs((res) => {
          this.setState({jsonArrayHistory: res});
        });
    }

    bingWebSearch = () => {
      console.log(this.state.query)
        const axiosConfig = {
            headers: {'Ocp-Apim-Subscription-Key': API_KEY}
        }
        return axios.get(API_URL + '?q=' + encodeURIComponent(this.state.query + "Instagram"), axiosConfig)
        .then(function(response) {
            return response.data.webPages.value[0].url;
        });
    }

    search = (query) => {
        this.bingWebSearch().then((result) => {
          this.setState({link: result}, () => {
             historyApi.uploadBlobFromText(query, result);
             this.updateHistoryState();
          });
        });
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
          <Search callback={this.search}/>
          <Result data={ this.state.link }/>
          <div className="history">
          <div className="header">
            <p>History</p>
            <hr/>
          </div>
          <div className="history-table">
            <History data={ this.state.jsonArrayHistory }/>
          </div>
          </div>
        </div>
      );
    }
}

export default App;
