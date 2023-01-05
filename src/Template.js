import React from "react";


function Template ({templateList}) {
  return (
    <div className="templatelist">
        <ul>
        
        {templateList.map((template) => (<li>{template.name}</li>))}
          
        </ul>
       
    </div>
  );
}

export default Template;