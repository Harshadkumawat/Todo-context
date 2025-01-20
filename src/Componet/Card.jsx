import React, {  useContext } from 'react'
import { FaTrashAlt ,FaEdit } from "react-icons/fa";
import TodoContext from './TodoContext'

const Card = ({todo}) => {
   const {removeTodo , editTodo } = useContext(TodoContext)

  return (
    <div className="p-6 border-2 border-gray-200 rounded-xl my-6 relative shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
    <h1 className="text-2xl font-bold text-gray-800 mb-2">{todo.title}</h1>
    <p className='text-gray-600 mb-4'>{todo.description}</p>
  
    <p 
      onClick={() => removeTodo(todo.id)} 
      className="absolute top-2 right-4 text-red-500 hover:text-red-700 cursor-pointer transition-transform transform hover:scale-110"
    >
      <FaTrashAlt />
    </p>
  
    <p 
      onClick={() => editTodo(todo)} 
      className="absolute top-2 right-12 text-blue-500 hover:text-blue-700 cursor-pointer transition-transform transform hover:scale-110"
    >
      <FaEdit />
    </p>
  </div>
  )
}

export default Card
