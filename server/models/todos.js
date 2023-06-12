import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todoValues: String,
});

const todoModel = mongoose.model("todolist", todoSchema);

export default todoModel;
