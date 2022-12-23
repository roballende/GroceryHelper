import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TemplateForm({ groceryList, addTemplate }) {
    const [templateName, setTemplateName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newTemplate = {
            id: uuid(),
            name: templateName,
            list: groceryList
        }
        
        addTemplate(newTemplate)
    }

    return (
        <form className="new-template-form" onSubmit={handleSubmit}>
            <input placeholder="Template Name" onChange={(e) => setTemplateName(e.target.value)}/>
            <input type="submit" value="Create New Template" />
        </form>
    );
}

export default TemplateForm;