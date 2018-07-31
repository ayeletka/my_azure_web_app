import React, { Component } from 'react';
import Search from '../Search/Search';

class Result extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	        link: props.link
	    };
    }

    render () {
     console.log("hiii")
     if (this.props.link === '')
    	return (
        <p>No link yet...</p>
    	);
    else {
        return (
            <a href={this.props.link} target='_blank'>{this.props.link}</a>
        );
    }
}}

export default Result;