import todoModel from "../models/todos.js";

// add Todo to database

export const addTodo = async (req, res) => {
  const todoValues = req.body.todoValues;
  console.log(todoValues);
  const newData = new todoModel({ todoValues });
  try {
    await newData.save();
    console.log(newData);
    res.status(201).json(newData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get todo from database using id

export const getTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const findTodo = await todoModel.findById(id);
    console.log(findTodo);
    if (!findTodo) {
      res.status(404).json({ error: "Todo not found" });
    }
    res.status(201).json(findTodo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete the todo using id

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await todoModel.deleteOne({ _id: id });
    res.status(201).json({ id: id });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
