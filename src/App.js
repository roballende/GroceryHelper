import NavBar from './NavBar';
import Body from './Body';
import React from 'react';
import TemplateList from './TemplateList';
import Grocery from './Grocery';
import { Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/AllGroceries" element={<Grocery/>} />
        <Route path="/AllGroceryLists" element={<TemplateList/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
