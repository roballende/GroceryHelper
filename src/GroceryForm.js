import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";

const options = [
  { key: 'Fruits', text: 'Fruits', value: 'Fruits' },
  { key: 'Vegetables', text: 'Vegetables', value: 'Vegetables' },
  { key: 'Meats', text: 'Meats', value: 'Meats' },
]



function GroceryForm({ addGrocery }) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Fruits")

  function handleSubmit(e) {
    e.preventDefault()

    const newGrocery = {
      name: newName,
      category: newCategory
    }

    fetch("http://localhost:3001/groceries", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newGrocery)
    })
      .then(resp => resp.json())
      .then(newGrocery => addGrocery(newGrocery))

  }

  return (
    <Form className="new-grocery-form" onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
          <Form.Input fluid placeholder='Grocery' onChange={(e) => setNewName(e.target.value)}/>
        <select id="category" onChange={(e) => setNewCategory(e.target.value)}>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Meats">Meats</option>
      </select>
        </Form.Group>
          <Button
           floated='right'
           icon
           labelPosition='left'
           primary
           size='small'
        >
        <Icon name='food' />
          Add Food
        </Button>
    </Form>
  );
}

export default GroceryForm;