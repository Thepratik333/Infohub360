import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTodo } from '../../context/notes/TodoContext'
import TodoItems from './TodoItems'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo, todos } = useTodo()
  const [check, setCheck] = useState("")
  console.log(todos)
  // console.log(check)
  
  const filteredTodos = check === "All" ? todos : todos.filter(todo => {
    if (check === "true") {
      return todo.isDone === true; // Completed
    } else if (check === "no") {
      return todo.isDone == false; // Not Completed
    }
    return true; // All
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo) return

    addTodo(todo);
    setTodo('')
  }
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
                <div className="card-body py-4 px-4 px-md-5">

                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center">
                            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} className="form-control form-control-lg" id="exampleFormControlInput1"
                              placeholder="Add new..." />
                            <div>
                              <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                            </div>
                            </form>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p className="small mb-0 me-2 text-muted">Filter</p>
                    <select className="select" onChange={(e)=>setCheck(e.target.value)}>
                      <option value="All">All</option>
                      <option value="true">Completed</option>
                      <option value="no">not Completd</option>
                    </select>
                    <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                    <select className="select">
                      <option value="1">Added date</option>
                      <option value="2">Due date</option>
                    </select>
                    <Link to="/" style={{ color: '#23af89' }} data-mdb-toggle="tooltip" title="Ascending">
                      <i className="fas fa-sort-amount-down-alt ms-2"></i>
                    </Link>
                  </div>
                  {todos && filteredTodos.map((todo) => (
                    <div key={todo._id}>
                      <TodoItems todo={todo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TodoForm