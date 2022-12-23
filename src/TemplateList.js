import React, { useState } from "react";

function TemplateList({ templateList }) {
  return (
    <div className="App">
      <header className="App-header">
        <p> Select a Template: 
          <select id="templates">
            {templateList.map((template) => (
              <option value={template.name}>{template.name}</option>
            ))}
          </select>
        </p>
      </header>
    </div>
  );
}

export default TemplateList;