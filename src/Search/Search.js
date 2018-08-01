import React, { Component } from 'react';

const SearchButton = (props) => {
    return (
        <input type="button" className="btn btn-primary"
            onClick={props.onClick} value="Search" />
    );
};

class Search extends Component {
    state = {
      query: '',
      link: '',
    }
  
  	getLink = () => {
  		return this.state.link;
  	}

    handleInputChange = () => {
      this.setState({
        query: this.searchInput.value
      })
    }

    search = () => {
      this.props.callback(this.state.query);
    };

    render() {
     return (
       <form>
   	      <input placeholder="Search for..." ref={input => this.searchInput = input} onChange={this.handleInputChange} />
	        <span className="button col-md-4">
	        <SearchButton onClick = {this.search} />
	        </span>
       </form>
     )
    }
}

export default Search;
