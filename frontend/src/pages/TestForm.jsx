import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../css/form.css";
import { useState } from "react";

function TestForm() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer"></div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
    </div>
  );
}

export default TestForm;
