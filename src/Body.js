import TemplateList from "./TemplateList";
import Form from "./Form";
import TemplateForm from "./TemplateForm";
import Grocery from "./Grocery";
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

  function displayTemplate(templateId) {
    const selectedTemplate = templateList.filter(template => template.id === templateId)
    setGroceryList(selectedTemplate.list)
  }

  return (
    <div className="App">
      <header className="App-header">
        <TemplateList templateList={templateList} displayTemplate={displayTemplate}/>
        <Form addGrocery={addGrocery}/>
        <Grocery groceryList={groceryList}/>
        <TemplateForm groceryList={groceryList} addTemplate={addTemplate}/>
      </header>
    </div>
  );
}

export default Body;