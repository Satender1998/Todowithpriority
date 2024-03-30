import {
  createTask,
  deleteTask,
  getMyTask,
  getSingleTask,
  updateTask,
} from "../controller/taskConroller.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post",isAuthenticated, createTask);
router.delete("/delete/:id",isAuthenticated, deleteTask);
router.put("/update/:id",isAuthenticated, updateTask);
router.get("/myTask",isAuthenticated, getMyTask);
router.get("/single/:id",isAuthenticated, getSingleTask);

export default router;
