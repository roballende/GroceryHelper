import NavBar from './NavBar';
import Body from './Body';
import React, { useState } from 'react';

function App() {
  const [groceryList, setGroceryList] = useState([])

  function addGrocery(newGrocery) {
    setGroceryList([...groceryList, newGrocery])
    console.log(groceryList)
  }

  return (
    <div className="App">
      <header className="App-header">
      <NavBar addGrocery={addGrocery}/>
      <Body />
      </header>
    </div>
  );
}

export default App;
