import React, {useState} from "react";
import {Container } from 'semantic-ui-react'


function Grocery({groceryList}) {

const allGrocery = groceryList.map((grocery) => {
  console.log(grocery.name)
})








return (
<Container>
    <div className="contentcontainer padding">
      <div className="divcontainer">
      <div className="Fruits">
        <h2>Fruits</h2>
        {/* {grocery.category === isFruits ?  <p>{grocery.name}</p> : null } */}
        
      </div>
      <div className="Vegetables">
        <h2>Vegetables</h2>
        {/* {grocery.category === isVegetables ?  <p>{grocery.name}</p> : null } */}

      </div>
      <div className="Meats">
        <h2>Meats</h2>
        {/* {grocery.category === isMeats ?  <p>{grocery.name}</p> : null } */}
        
      </div>
      </div>
    </div>
  
</Container>
  )
}

export default Grocery;