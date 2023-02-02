import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controller.js";

const router = Router();

//Post Method
router.post("/posts", createPost);

//Get all Method
router.get("/posts", getPosts);

//Get by ID Method
router.get("/posts/:id", getPost);

//Update by ID Method
router.patch("/posts/:id", updatePost);

//Delete by ID Method
router.delete("/posts/:id", deletePost);

export default router;
