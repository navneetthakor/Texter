import React, { useState } from "react";

export default function Textbox() {
   let handleChange = (event)=>{
    setText(event.target.value);
   }

   let handleClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
   }

  const [text, setText] = useState("Enter your text");

  return (
    <div>
      <div className="container my-4">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            <h1>Convert string to uppercase here</h1>
          </label>
          <textarea
            class="form-control border-2"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit" onClick={handleClick}>
            Convert to uppercase
          </button>
        </div>
      </div>
    </div>
  );
}
