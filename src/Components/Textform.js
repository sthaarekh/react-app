import React, {useState} from 'react'

export default function Textform(props) {
  const upFun=(e)=>{
    e.preventDefault();                 //prevents default reloading
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text set to uppercase","sucess");
    }
    const lowFun=(e)=>{
      e.preventDefault();
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text set to lowercase","sucess");
  }

    const clearFun=(e)=>{
      e.preventDefault();
      props.showAlert("Text Cleared","sucess");
      setText("");
    }
    
    const copyFun=(e)=>{
      e.preventDefault();
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard","sucess");
      }
    
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }

  // text ="New text"; //wrong way to change text
  // setText("New text");  //correct way to change text

  const [text, setText] = useState('');
    
  return (
    <div>
      <form>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
    <textarea className="form-control" value={text} id="myBox" rows="9"  onChange={handleOnChange}></textarea>
    <button className="btn btn-primary my-2 mx-2" onClick={upFun}>Convert to Uppercase</button>
    <button className="btn btn-primary my-2 mx-2" onClick={lowFun}>Convert to Uppercase</button>
    <button className="btn btn-primary my-2 mx-2" onClick={clearFun}>Clear Text</button>
    <button className="btn btn-primary my-2 mx-2" onClick={copyFun}>Copy to clipboard</button>
  </div>
</form>
<div className="container">
  <h2>Your Text summary</h2>
  <p>{text.split(" ").length} words {text.length} characters</p>
  <p>{text.split(" ").length*0.008} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </div>
  )
}
