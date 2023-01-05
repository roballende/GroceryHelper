import React from "react";
import {Container } from 'semantic-ui-react'


function Grocery({groceryList}) {

  let fruitsList = groceryList.filter((grocery) => (
    grocery.category === "Fruits"
  ))

  let vegsList = groceryList.filter((grocery) => (
    grocery.category === "Vegetables"
  ))

  let meatsList = groceryList.filter((grocery) => (
    grocery.category === "Meats"
  ))

function handleClick(e) {
  e.style="text-decoration: line-through;"
}

return (
<Container>
    <div className="contentcontainer padding">
      <div className="divcontainer">
      <div className="Fruits">
        <h2>Fruits</h2>
        {fruitsList.map((fruit) => (<p
          onClick={(e) => handleClick(e.target)} >
            {fruit.name}
            </p>))}
    
        
      </div>
      <div className="Vegetables">
        <h2>Vegetables</h2>
        {vegsList.map((veg) => (<p
          onClick={(e) => handleClick(e.target)} >
          {veg.name}
          </p>))}
        
      </div>
      <div className="Meats">
        <h2>Meats</h2>
        {meatsList.map((meat) => (<p
          onClick={(e) => handleClick(e.target)}>
          {meat.name}
          </p>))}
       
        
      </div>
      </div>
    </div>
  
</Container>
  )
}

export default Grocery;