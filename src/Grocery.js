import React, {useState} from "react";


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
        <div className="contentcontainer padding">
          <div className="divcontainer">
          <div className="Fruits">
            <h2>Fruits</h2>
            {fruitsList.map((fruit) => (<h3>{fruit.name}</h3>))}
          </div>
          <div className="Vegetables">
            <h2>Vegetables</h2>
            {vegsList.map((veg) => (<h3>{veg.name}</h3>))}
          </div>
          <div className="Meats">
            <h2>Meats</h2>
            {meatsList.map((meat) => (<h3>{meat.name}</h3>))}
          </div>
          </div>
        </div>  
  )
}

export default Grocery;