import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import { LoginContext } from "../context/notes/loginContext";


function Notesitem(props) {
  let context = useContext(noteContext);
  const loginContext = useContext(LoginContext);
  const {noteDelete} = context;
  const { note , updateNote} = props;
  return (
    <>
      <div className="col-md-3 my-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="card-title">{note.title}</h5>
              <div>
                <i className="fa-solid fa-trash mx-1" onClick={()=>{noteDelete(note._id); loginContext.showAlert("Notes deleted succesfully","success")}}></i>
                <i className="fa-solid fa-pen-to-square mx-1" onClick={()=>{updateNote(note)}}></i>
              </div>
            </div>
            <p className="card-text">
              {note.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notesitem;
