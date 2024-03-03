import { useTodo } from "../../context/notes/TodoContext";
import { useState } from "react";


function TodoItems({ todo }) {
  const {todos,deleteTodo, updateTodo, toggleComplete} = useTodo()
  const [todoMsg, setTodoMsg] = useState(todo.description)
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  // console.log(todos )
  // console.log(todo.isDone === false? "false": "true" || todo._id)

  const toggleHandle=()=>{
    toggleComplete(todo._id);
  }

  return (
    <>
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
        <li className={`list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent`}>
        
          <input
           type="text" 
          //  rows="3"
           style={{padding: "11px 13px"}}
           className={`lead fw-normal mb-0 ${isTodoEditable ? "border-secondary px-2" : "border-transparent"
          } ${todo.isDone ? "text-decoration-line-through" : ""} w-100 `}
          value={todoMsg}
          onChange={e => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          />
        </li>
        <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input
            onChange={toggleHandle}
              className="form-check-input me-0"
              type="checkbox"
              value=""
              id="flexCheckChecked1"
              checked={todo.isDone}
              aria-label="..."
            />
          </div>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1" style={{fontSize: "18px"}}>
            <span
            onClick={()=>setIsTodoEditable(!isTodoEditable)}
              className="text-info"
              data-mdb-toggle="tooltip"
              title="Edit todo"
            >
              {isTodoEditable ? <i class="fas fa-save me-3" style={{color: "#FFD43B"}}></i>: <i className="fas fa-pencil-alt me-3"></i>}
            </span>
            <span
            onClick={() => deleteTodo(todo._id)}
              className="text-danger"
              data-mdb-toggle="tooltip"
              title="Delete todo"
            >
              <i className="fas fa-trash-alt"></i>
            </span>
          </div>
          <div className="text-end text-muted">
            <span
              className="text-muted"
              data-mdb-toggle="tooltip"
              title="Created date"
            >
              <p className="small mb-0">
                <i className="fas fa-info-circle me-2"></i>
                {new Date(todo.createdAt).toLocaleDateString()}
              </p>
            </span>
          </div>
        </li>
      </ul>
    </>
  )

};

export default TodoItems;
