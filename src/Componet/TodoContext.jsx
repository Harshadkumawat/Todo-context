import { createContext, useState } from "react";

const TodoContext = createContext();

// Provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({ todo: {}, isEdit: false });
  

  const addTodo = (title, description) => {
    setTodos([{ id: crypto.randomUUID(), title, description }, ...todos]);
  };

  // remove

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit Todo
  const editTodo = (todo) => {
    setEdit({ todo: todo, isEdit: true });
  };

  
  // Update Todo
  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  

  return (
    <TodoContext.Provider value={{ todos, edit,  addTodo , removeTodo , editTodo , updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
