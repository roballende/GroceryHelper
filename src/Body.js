import React, {useState} from "react";
import TemplateList from "./TemplateList";
import GroceryForm from "./GroceryForm";
import Grocery from "./Grocery";
import TemplateForm from "./TemplateForm";

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
      <GroceryForm addGrocery={addGrocery}/>
      <Grocery />
      <TemplateForm groceryList={groceryList} addTemplate={addTemplate}/>
      </header>
    </div>
  );
}

export default Body;