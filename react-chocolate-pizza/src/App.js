import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import './App.css';
import './style.css';
import Nav from './Nav.js';
import Instructions from './Instructions.js';


export default class App extends Component {
render () {
  const pizza = {
    url:'choco-pizza.png',
    name:'Chocolate Pizza',
    description:'Delicious',
    author:'Vanessa Stevenson',
    date:'POSTED ON 15 DEC 2013/ DESSERTS'
  }
    
  return (
  <div className='app'> 
  <Header description={pizza.description}/>
  <Nav/>
  <Body url={pizza.url} name={pizza.name} date={pizza.date}></Body>
  <Instructions/>
  <Footer author={pizza.author}></Footer>
  </div>
 
  );
}
}