import React from "react";

function TemplateList({ templateList, displayTemplate }) {
 
  return (
    <div className="templatelist">
      <header className="App-header">
        <p> Select a Template: &ensp;
          <select id="templates" onChange={(e) => displayTemplate(e.target.value)}>
            {templateList.map((template) => (
              <option  value={template.id}>{template.name}</option>
            ))}
          </select>
        </p>
      </header>
    </div>
  );
}

export default TemplateList;