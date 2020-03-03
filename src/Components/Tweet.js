import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//var Twit = require('twit');
var config = require('../config');
//var T = new Twit(config);

class Tweet extends Component {
  componentWillMount() {}

  componentDidMount() {
    console.log('Test');
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    console.log('Test');
    return <div>{console.log(config)}</div>;
  }
}

Tweet.propTypes = {};

export default Tweet;
