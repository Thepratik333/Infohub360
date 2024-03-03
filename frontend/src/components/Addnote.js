import React, { useContext, useState } from "react";
import noteContext from '../context/notes/noteContext'
import { LoginContext } from "../context/notes/loginContext";


function Addnote() {
  let context = useContext(noteContext);
  const loginContext = useContext(LoginContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
    loginContext.showAlert("Note added succesfully","success")
  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })

  }
  return (
    <div className="container my-3">
      <h3>Add a Note</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description </label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange}
          />
        </div>

        <button disabled={note.title.length === 0||note.description.length === 0} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  );
}

export default Addnote;
