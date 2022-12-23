import TemplateList from "./TemplateList";
import Form from "./Form";
import Grocery from "./Grocery";
import React, { useState } from "react";

function Body() {
  const [groceryList, setGroceryList] = useState([])
  const [templateList, setTemplateList] = useState([])

  function addGrocery(newGrocery) {
    setGroceryList([...groceryList, newGrocery])
    console.log(groceryList)
  }

  return (
    <div className="App">
      <header className="App-header">
        <TemplateList templateList={templateList}/>
        <Form addGrocery={addGrocery}/>
      </header>
    </div>
  );
}

export default Body;