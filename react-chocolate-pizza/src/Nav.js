import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
      return <header>
    <nav>
        <div class="nav-div" id="rss">
            <img class="icon" src='rss-icon.png' />
            <img class="icon" src='mail-icon.png' />
        </div>
        <div class="nav-div">
            <img class="icon" alt='image' src='fb-icon.png' />
            <img class="icon" alt='image logo' src='twit-icon.png' />
            <img class="icon" alt='image insta' src='gp-icon.png' />
            <img class="icon" alt='image fb' src='insta-icon.png' />
            <img class="icon" alt='image twitter' src='flic-icon.png' />
            <img class="icon" alt='image' src='pint-icon.png' />
        </div>
    </nav>
          </header>;
    }
  }