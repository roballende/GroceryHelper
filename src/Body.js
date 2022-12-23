import TemplateList from "./TemplateList";
import Form from "./Form";
import TemplateForm from "./TemplateForm";
import React, { useState } from "react";

function Body() {
  const [groceryList, setGroceryList] = useState([])
  const [templateList, setTemplateList] = useState([])

  function addGrocery(newGrocery) {
    setGroceryList([...groceryList, newGrocery])
  }

  function addTemplate(newTemplate) {
    setTemplateList([...templateList, newTemplate])
  }

  return (
    <div className="App">
      <header className="App-header">
        <TemplateList templateList={templateList}/>
        <Form addGrocery={addGrocery}/>
        <TemplateForm groceryList={groceryList} addTemplate={addTemplate}/>
      </header>
    </div>
  );
}

export default Body;