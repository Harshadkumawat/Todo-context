import React, { useContext } from 'react'
import Card from './Card'
import TodoContext from './TodoContext'

const CardCantainer = () => {

   const {todos} = useContext(TodoContext)
   

  return (
    <div className="   px-6 grid grid-cols-4 gap-4 ">
     {
        todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))
     }
  </div>
  )
}

export default CardCantainer