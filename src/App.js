import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Body from './Body';
import Form from './Form';
import TemplateList from './TemplateList';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        {/*exact?*/}
        <Route exact path="/">
          <App/>
        </Route>
        <Route path="/addgroceries">
          <Form/>
        </Route>
        <Route path="/grocerylists">
          <TemplateList/>
        </Route>
      </Routes>
      <Body />
      </header>
    </div>
  );
}

export default App;
