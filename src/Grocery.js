import React from "react";
import {Container } from 'semantic-ui-react'


function Grocery({groceryName, groceryCategory}) {
  return (
<Container>
    <div className="contentcontainer padding">
      <div className="divcontainer">
      <div className="fruits">
        <h2>Fruits</h2>
        <p>Apple</p>
        <p>Apple</p>
        <p>Apple</p>
      </div>
      <div className="vegetables">
        <h2>Vegetables</h2>
        <p>Carrot</p>
        <p>Carrot</p>
        <p>Carrot</p>
      </div>
      <div className="meats">
        <h2>Meats</h2>
        <p>Bacon</p>
        <p>Bacon</p>
        <p>Bacon</p>
      </div>
      </div>
    </div>
</Container>
  )
}

export default Grocery;