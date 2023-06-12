import axios from "axios";

const URL = "http://localhost:8000";

// addTodo Api function

export const addTodoApi = async (todo) => {
  console.log(todo);
  const response = await axios.post(`${URL}/`, { todoValues: todo });
  console.log(response.data);
  return response.data;
};

// Get todo using id function

export const getTodoId = async (id) => {
  const response = await axios.get(`${URL}/todo/${id}`);
  return response.data;
};

// Delete the todo using id

export const todoDeleteApi = async (id) => {
  try {
    const response = await axios.delete(`${URL}/todo/${id}`);
    return response;
  } catch (err) {
    console.log("Error while deleting todo", err);
  }
};
