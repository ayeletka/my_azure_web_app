import React, { Component } from 'react';
import axios from 'axios'
import App from '../App'
import Result from '../Result/Result';
import History from '../History/History';

var historyApi = require('../History/HistoryApi');
var history = require('../History/History');

const API_KEY = '09ba53a3ba8243f68eb5374bbcad64c0'
const API_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search'





const SearchButton = (props) => {
    return (
        <button type="button" className="btn btn-primary"
            onClick={props.onClick}>Search</button>
    );
  };

class Search extends Component {
  state = {
    query: '',
    results: [],
    link: '',
    val:''
  }
  
  	getLink = () => {
  		return this.state.link;
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



  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
   return (
     <form>
	       <input
	         placeholder="Search for..."
	         ref={input => this.search = input}
	         onChange={this.handleInputChange}
	       />
	        <span className="button col-md-4">
	        <SearchButton
	                onClick = {() => {
	                    this.bingWebSearch()
	                	.then(function(result){
	                		this.setState({val: this.state.query, link: result}, () => {
                         historyApi.uploadBlobFromText(this.state.query, result);
                         // history.updateHistoryState();
        });
	                	}.bind(this))}}/>
	        </span>
	        <h4 className="Result col-md-4">
	        <Result 
	        link = {this.state.link}/>
	         </h4>
     </form>
   )
  }
}

export default Search;
