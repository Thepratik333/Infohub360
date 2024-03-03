import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitem from './Notesitem';
import Addnote from './Addnote';
import { LoginContext } from '../context/notes/loginContext';
import { useNavigate } from 'react-router-dom';

function Notes() {
  let context = useContext(noteContext);
  const loginContext = useContext(LoginContext)
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  // console.log(localStorage.getItem('token'));

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/Login')
    }else{
      getNotes();
    }
    // eslint-disable-next-line 
  }, [])
  const ref = useRef(null)
  const refclose = useRef(null)
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }


  const handleClick = (e) => {
    // console.log("Updating the note...", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    ref.current.click();
    loginContext.showAlert("Notes updated succesfully", "success")

  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }



  return (
    <>
      <Addnote />
      <button style={{ display: "none" }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label"> Title </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description </label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length <5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3" style={{marginLeft: "7vw"}}>
        <h2>You Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <Notesitem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes