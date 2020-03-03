import React, { Component } from 'react';
//import PropTypes from 'prop-types';
var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

class Tweet extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>Test</div>;
  }
}

Tweet.propTypes = {};

export default Tweet;
