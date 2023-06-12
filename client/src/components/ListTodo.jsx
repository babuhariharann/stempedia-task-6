import { useState } from "react";
import { getTodoId, todoDeleteApi } from "../service/api.js";

const ListTodo = ({ todos, handleTodoDelete }) => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  // getTodo function

  const getTodo = async (id) => {
    try {
      console.log("Todo id is ", id);
      const response = await getTodoId(id);
      setSelectedTodo(response);
    } catch (error) {
      console.log("Error getting todo details : ", error);
    }
  };

  //render function for selected todos

  const renderSelectedTodo = () => {
    if (selectedTodo) {
      return (
        <div>
          <h1>Todo Details :</h1>
          <p>Id : {selectedTodo._id}</p>
          <p>todo : {selectedTodo.todoValues}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Todos details</h1>
          <p>No todos are selected</p>
        </div>
      );
    }
  };

  // delet the todo

  const todoDelete = async (id) => {
    await todoDeleteApi(id);
    if (selectedTodo && selectedTodo._id === id) {
      setSelectedTodo(null);

      const newTodos = todos.filter((todo) => todo._id !== id);
      handleTodoDelete(id, newTodos);
    }
  };

  return (
    <>
      {renderSelectedTodo()}
      {todos.map((item) => (
        <div key={item._id}>
          <p>{item.todoValues}</p>
          <div>
            <button onClick={() => getTodo(item._id)}>Get Todo</button>
            <button onClick={() => todoDelete(item._id)}>Delete Todo</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTodo;
