import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return <div>
          <img id='logo' alt='header img' src='logo.png' />
          <h1>{this.props.description}</h1>
          <h2>THE BEST FOOD BLOG ON THE WEB</h2>
          </div>;
    }
  }