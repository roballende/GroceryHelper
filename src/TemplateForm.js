import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Button, Icon, } from "semantic-ui-react";

function TemplateForm({ groceryList, addTemplate }) {
    const [templateName, setTemplateName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newTemplate = {
            id: uuid(),
            name: templateName,
            list: groceryList
        }
    
    fetch("http://localhost:3001/templates", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newTemplate)
    })
      .then(resp => resp.json())
      .then(newTemplate=> addTemplate(newTemplate))
    }

    return (

    <Form className="new-template-form" onSubmit={handleSubmit}>
        <Form.Group  className='templatename' widths='four'>
            <Form.Input  placeholder='Template Name' onChange={(e) => setTemplateName(e.target.value)}/>
            
            </Form.Group>
            <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
            >
            <Icon name='file' />
            Create New Template
            </Button>
    </Form>
    );
}

export default TemplateForm;