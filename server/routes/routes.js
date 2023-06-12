import express from "express";
import { addTodo, getTodo, deleteTodo } from "../controller/todo-controller.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/todo/:id", getTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
