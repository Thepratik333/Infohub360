import React, {useState, useEffect} from "react";
import { TodoProvider } from "../../context/notes/TodoContext";
import TodoForm from "./TodoForm";


function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  
  async function getTodos(){
    try {
      const response = await fetch('http://localhost:8080/api/v1/todos');
      const data = await response.json();

      if (data.success) {
        setTodos(data.data);
        return todos
      } else {
        console.error('Error fetching todos:', data.message);
      }
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };
  
  function getTodo(id){
   setTodos((prev) => prev.filter((todo)=> todo._id !== id))
  }

  const deleteTodo = (id) => {
    console.log(id)
    setTodos((prev) => prev.filter((todo) => todo._id !== id))
    console.log("deleted ")
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo._id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };
  
  
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos,{ _id: Date.now(), description: todo, createdAt: Date.now() }]);
  };

  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((todo)=> todo._id === id? {...todo, isDone: !todo.isDone} : todo))
    console.log(`Toggle complete ${id}`);
    // console.log(todos._id === id? todos: "not found");
  }

  
  return (
    <TodoProvider value={{todos, deleteTodo, updateTodo, addTodo, toggleComplete}}>
      <TodoForm/>
    </TodoProvider>
  );
}

export default Todo;
