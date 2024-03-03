import { createContext, useContext } from "react";
import React from 'react'

const TodoContext = createContext({
    todos: [], 
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider;