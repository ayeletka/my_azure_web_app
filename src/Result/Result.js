import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	        link: props.link
	    };
    }

    render () {
    if (this.props.link === '')
    	return (<p> ..... </p>);
    else
    {
        return (<a href={this.props.link} target='_blank'>{this.props.link}</a>);
    }
    }
}

export default Result;