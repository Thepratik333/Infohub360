import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";


import '../../App.css';
import TextForm from "./Wordcomp/TextForm";
import Alert from "./Wordcomp/Alert";


const WordApp = () =>{
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
  
 
  return (
    <>
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route
              exact path="/"
              element={<TextForm head="ENTER TEXT BELOW" showalert={showalert} />}
            ></Route>
          </Routes>
        </div>
    </>
  );
}

export default WordApp;
