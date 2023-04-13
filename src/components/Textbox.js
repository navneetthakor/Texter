import React, { useState } from "react";

export default function Textbox(props) {
  let handleChange = (event) => {
    setText(event.target.value);
  };

  let handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.func('converted to uppercase','success');
  };

  let handleclrClick = () => {
    let newText = "";
    setText(newText);
    props.func('cleared the textbox','success');
  };

  let handlecopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.func('copied the textbox','success');
  }

  let handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.func('converted to lowercase','success');
  };

  const [text, setText] = useState("Enter your text");

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#001269",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            <h1>Convert string to uppercase here</h1>
          </label>
          <textarea
            class="form-control border-2"
            value={text}
            id="text1"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#001269",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="col-12" >
          <button class="btn btn-primary" type="submit" onClick={handleupClick}>
            Convert to uppercase
          </button>
          <button
            class="btn btn-primary mx-3"
            type="submit"
            onClick={handlelowClick}
          >
            Convert to lowercase
          </button>
          <button
            class="btn btn-primary mx-3"
            type="submit"
            onClick={handleclrClick}
          >
            Clear
          </button>
          <button
            class="btn btn-primary mx-3"
            type="submit"
            onClick={handlecopyClick}
          >
            Copy to ClipBoard
          </button>
        </div>
      </div>

      <div className="container" style={{
          color: props.mode === "light" ? "black" : "white",
        }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} charachters
        </p>
      </div>

      <div className="container my-3" style={{
          color: props.mode === "light" ? "black" : "white",
        }}>
        <h2>Preview</h2>
        <h4 className="my-2">Upper case</h4>
        <p>{text===""?'ENTER TEXT TO PREVIEW':text.toUpperCase()}</p>
        <h4 className="my-2">Lower case</h4>
        <p>{text===""?'enter text to preview':text.toLowerCase()}</p>
      </div>
    </div>
  );
}
