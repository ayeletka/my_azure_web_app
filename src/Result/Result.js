import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	        link: props.link
	    };
    }

    render () {
    if (this.props.data === '')
    	return (<p> ..... </p>);
    else
    {
        return (<a href={this.props.data} target='_blank'>{this.props.data}</a>);
    }
    }
}

export default Result;