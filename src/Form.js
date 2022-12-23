import React, { useState } from "react";

function Form({ addGrocery }) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Fruits")

  function handleSubmit(e) {
    e.preventDefault()

    const newGrocery = {
      name: newName,
      category: newCategory
    }
    addGrocery(newGrocery)
  }

  return (
    <form className="new-grocery-form" onSubmit={handleSubmit}>
      <input placeholder="Grocery" onChange={(e) => setNewName(e.target.value)}/>
      <select id="category" onChange={(e) => setNewCategory(e.target.value)}>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Meats">Meats</option>
      </select>
      <input type="submit" value="Add to List" />
    </form>
  );
}

export default Form;