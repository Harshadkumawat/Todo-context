import React, { useState } from "react";
import Nav from "./Componet/Nav";
import Form from "./Componet/Form";
import CardCantainer from "./Componet/CardCantainer";
import { TodoProvider } from "./Componet/TodoContext";

const App = () => {
  
 

  return (

    <TodoProvider>
    <Nav/>
    <Form/>
    <CardCantainer/>
    
  
   
  
    
  </TodoProvider>
  
  );
};

export default App;
