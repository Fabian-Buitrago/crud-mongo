import { Router } from "express";

const router = Router();

//Post Method
router.post("/posts", (req, res) => {
  res.send("Post API");
});

//Get all Method
router.get("/posts", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/posts/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/posts/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/posts/:id", (req, res) => {
  res.send("Delete by ID API");
});

export default router;
