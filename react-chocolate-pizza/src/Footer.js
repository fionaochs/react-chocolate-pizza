import React, { Component } from "react";

export default class Body extends Component {
    render() {
      return  <div id='footer'>   
      <img id='headShot' alt='headshot' src='van-pic.png'></img>
    
      <div id="author"> 
          <h1>{this.props.author}</h1>
          <p id="bio">       
              Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
          </p>
      </div>
          
          <div id="button">
              <button id="recipeButton" type="submit">SHARE RECIPE</button>
          </div>
    </div> 
    }
  }