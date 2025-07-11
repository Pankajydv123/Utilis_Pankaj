import React,{useState} from 'react'

function Textform(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Textform converted to uppercase", "success");
    }

    const handleDownClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Textform converted to lowercase", "success");
    }

    const handlecopy= ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Textform copied to clipboard", "success");
    }

    const handleClearClick= ()=>{
        let newText = "";
        setText(newText);
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces in textform have been removed", "success");
    }

    const handleReverseClick= ()=>{
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);
        props.showAlert("Whole words in the textform have been reversed", "success");
    }

    const handleCapitaliseClick= ()=>{
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
        props.showAlert("All words in the textform have been capitalised", "success");
    }

    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = newtext; //wrong way to change state
    // setText =("newtext"); //correct way to change state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#47496a':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse words</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitaliseClick}>Capitalise words</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text in textarea to preview here......"}</p>
    </div>
    </>
  )
}

export default Textform

