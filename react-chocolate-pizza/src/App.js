import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import './App.css';
import './style.css';


export default class App extends Component {



render () {
  const pizza = {
    url:'choco-pizza.png',
    name:'Chocolate Pizza',
    description:'Delicious',
    author:'Vanessa Stevenson'
  }
  return (
  <div className='app'> 
  <Header description={pizza.description}/>
  <Body url={pizza.url} name={pizza.name}></Body>
  <Footer author={pizza.author}></Footer>
  </div>
 
  );
}
}