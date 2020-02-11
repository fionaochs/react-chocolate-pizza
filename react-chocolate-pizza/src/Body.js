import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return <div id="instructions">
        
        <img alt={this.props.url} src={this.props.url} />
    <p>
        For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
    </p>

    <p>
        Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely solved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the mixture is cooled.
    </p>
    <p>
        Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass Tupperware. Freeze for at least two hours before serving.
    </p>

 <ul id="ul1" />
    
    <img alt='list' src='list-bg.png' />
     <input type="checkbox" name="ingredient" class="strikethrough" value="milk" /> 
     <label class="strikeThis">1 1/2 cups milk</label>
     <input type="checkbox" name="ingredient" class="strikethrough" value="mascarpone" /> 
     <label class="strikeThis">1/2 cup mascarpone</label>
     <input type="checkbox" name="ingredient" class="strikethrough" value="salt" /> 
     <label class="strikeThis">1/2 tsp pink salt</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="figs" /> 
     <label class="strikeThis">1 lb Black Mission Figs</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="salt" /> 
     <label class="strikeThis">1/2 tsp pink salt</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="sugar" /> 
     <label class="strikeThis">1/2 cup brown sugar</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="water" />
     <label class="strikeThis">2-4 tbs water</label> 

 
 <ul id="ul2" />
     <input type="checkbox" name="ingredient" class="strikethrough" value="cream" /> 
     <label class="strikeThis">1 1/2 cups heavy cream</label>
     <input type="checkbox" name="ingredient" class="strikethrough" value="sugar" /> 
     <label class="strikeThis">1/3 cup granulated sugar</label>
     <input type="checkbox" name="ingredient" class="strikethrough" value="eggs" /> 
     <label class="strikeThis">2 egg yolks</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="lemon" /> 
     <label class="strikeThis">1 lemon, juiced</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="butter" /> 
     <label class="strikeThis">2 tbs butter</label>  
     <input type="checkbox" name="ingredient" class="strikethrough" value="pecans" />
     <label class="strikeThis">1 cup honey roasted pecans, roughly chopped</label>  
</div>
}
}