import NavBar from './NavBar';
import Body from './Body';
import Template from './Template';
import Grocery from './Grocery';
import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";



function App() {
  const [groceryList, setGroceryList] = useState([])
  const [templateList, setTemplateList] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:3001/groceries")
      .then(resp => resp.json())
      .then(setGroceryList)
    fetch("http://localhost:3001/templates")
      .then(resp => resp.json())
      .then(setTemplateList)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/Groceries" element={<Grocery groceryList={groceryList}/>} />
        <Route path="/TemplateLists" element={<Template templateList={templateList}/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;