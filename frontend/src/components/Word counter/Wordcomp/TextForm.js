import React, {useState} from 'react'
import Alert from './Alert';

export default function TextForm() {
  
  const [alert,setalert] = useState(null);

  const showalert = (messagae,type) =>{
      setalert({
        msg: messagae,
        type: type
      });

      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

    const upper = () =>{
      console.log("button is clicked");
      let Name = text.toUpperCase();
      setText(Name);
      showalert("Uppercase succesfully","success");
    }
    const lower = () =>{
      console.log("button is clicked");
      let Name = text.toLowerCase();
      setText(Name);
      showalert("Lowercase succesfully","success");
    }
    const copy = () =>{
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      showalert("Copy text succesfully","success");
    }
    const extraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      showalert("Extra spaces removed succesfully","success");
    }
    
  const change = (event)=>{
    setText(event.target.value);
  }

  const clear = () =>{
    setText('');
    showalert("clear text succesfully","success");
  }
  const [text ,setText] = useState("");
  // const [char, lenChar] = useState(0);
  return (
    <>
    <Alert alert={alert} />
    <div style={{paddingTop: "100px"}}>
    <div className="container text-dark">
    <div className="mb-3 my-3">
      <label htmlFor="mybox" className="form-label" style={{fontSize: "25px"}}>
      Text Area:
      </label>
      <textarea
        className="form-control"
        id="mybox"
        value={text}
        onChange={change}
        rows="8" 
      ></textarea>
    </div>
    <button disabled={text===""} className="btn btn-primary mx-1"  onClick={upper}> Convert in Uppercase</button>
    <button disabled={text===""} className="btn btn-primary mx-1" onClick={lower}> Convert in Lowecase</button>
    <button disabled={text===""} className="btn btn-primary mx-1" onClick={clear}> Clear text</button>
    <button disabled={text===""} className="btn btn-primary mx-1" onClick={copy}> Copy text</button>
    <button disabled={text===""} className="btn btn-primary mx-1" onClick={extraSpaces}> Remove Extra Spaces</button>
  </div>
  <div className={`container text-dark`}>
    <h3 className='mt-2'>Your text summary</h3>
    <p className='my-3'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    <p className='my-3'>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h6>Preview</h6>
    <p>{text===''?'Enter something in above box':text}</p>
  </div>
  </div>
  </>
  )
}


