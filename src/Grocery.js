import React, {useState} from "react";
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

return (
<Container>
    <div className="contentcontainer padding">
      <div className="divcontainer">
      <div className="Fruits">
        <h2>Fruits</h2>
        {fruitsList.map((fruit) => (<p>{fruit.name}</p>))}
    
        
      </div>
      <div className="Vegetables">
        <h2>Vegetables</h2>
        {vegsList.map((veg) => (<p>{veg.name}</p>))}
        
      </div>
      <div className="Meats">
        <h2>Meats</h2>
        {meatsList.map((meat) => (<p>{meat.name}</p>))}
       
        
      </div>
      </div>
    </div>
  
</Container>
  )
}

export default Grocery;