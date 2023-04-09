import React, { useState } from "react";

export default function Textbox() {
   let handleChange = (event)=>{
    setText(event.target.value);
   }

   let handleupClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
   }

   let handlelowClick = ()=>{
    let newText = text.toLowerCase();
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
          <button class="btn btn-primary" type="submit" onClick={handleupClick}>
            Convert to uppercase
          </button>
          <button class="btn btn-primary mx-3" type="submit" onClick={handlelowClick}>
            Convert to lowercase
          </button>
        </div>
      </div>

    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} charachters</p>
    </div>
    
    <div className="container my-3">
        <h2>Preview</h2>
        <h4 className="my-2">Upper case</h4>
        <p>{text.toUpperCase()}</p>
        <h4 className="my-2">Lower case</h4>
        <p>{text.toLowerCase()}</p>
    </div>

    </div>
  );
}
