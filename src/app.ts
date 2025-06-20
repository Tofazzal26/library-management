import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { bookRoutes } from "./app/controllers/book.controller";

dotenv.config();
const app: Application = express();
app.use(express.json());

app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to library App");
});

export default app;
