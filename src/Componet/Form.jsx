import React, { useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const Form = () => {
  const { addTodo, edit, updateTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? addTodo(title, description)
      : updateTodo({ id: edit.todo.id, title, description });

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo?.title || "");
    setDescription(edit.todo?.description || "");
  }, [edit]);

  return (
    <>
       <form
    onSubmit={handlesubmit}
    className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 h-60 p-8 rounded-xl shadow-lg mx-4 my-6"
  >
    <input
      className="px-4 py-2 w-full md:w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      type="text"
      placeholder="Enter title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <textarea
      className="px-4 py-2 w-full md:w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 transition"
      placeholder="Enter description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    ></textarea>
    <button className="w-full md:w-96 py-2 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
      Submit
    </button>
  </form>
    </>
  );
};

export default Form;
