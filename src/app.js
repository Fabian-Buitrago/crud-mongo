import express from "express";
import { database } from "./db.js";
import postRoutes from "./routes/posts.routes.js";

const app = express();

app.use(express.json());

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api", postRoutes);

app.use((req, res, next) => {
  res.status(500).json({
    message: "endpoint not found",
  });
});

export default app;
