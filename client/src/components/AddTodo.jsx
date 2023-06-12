import { useState } from "react";
import ListTodo from "./ListTodo";
import { addTodoApi } from "../service/api.js";

const AddTodo = () => {
  // Usestate declare

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //  Onchange event

  const todoValueChange = (e) => {
    setTodo(e.target.value);
  };

  // Add todo value

  const addTodoValue = async () => {
    const data = await addTodoApi(todo);
    setTodos([...todos, data]);
    setTodo("");
  };

  // delete the todo

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="todo..."
          onChange={todoValueChange}
          value={todo}
        />
        <button onClick={addTodoValue}>Add Todo</button>
        {todos.length ? (
          <ListTodo todos={todos} handleTodoDelete={handleTodoDelete} />
        ) : (
          <p>No todo at this moment</p>
        )}
      </div>
    </>
  );
};

export default AddTodo;
