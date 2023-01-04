import React from "react";

function TemplateList({ templateList, displayTemplate }) {
  return (
    <div className="templatelist">
      <header className="App-header">
        <p> Select a Template: &ensp;
          <select id="templates" onChange={(e) => displayTemplate(e.target.id)}>
            {templateList.map((template) => (
              <option  id={template.id} value={template.name}>{template.name}</option>
            ))}
          </select>
        </p>
      </header>
    </div>
  );
}

export default TemplateList;