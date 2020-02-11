import React, { Component } from "react";

export default class Body extends Component {
    state = {
        shareRecipeCounts: 0
    }

    handleButtonClick = e =>
    this.setState({
      shareRecipeCounts: this.state.shareRecipeCounts + 1
    });

    render() {
        console.log(this.state.shareRecipeCounts);
      return  <div id='footer'>   
      <img id='headShot' alt='headshot' src='van-pic.png'></img>
    
      <div id="author"> 
          <h1>{this.props.author}</h1>
          <p id="bio">       
              Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
          </p>
      </div>
          
          <div id="button">
              <button id="recipeButton" type="submit" onClick={this.handleButtonClick}>SHARE RECIPE</button>
          </div>
    </div> 
    }
  }