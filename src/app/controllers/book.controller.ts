import express, { Request, Response } from "express";
import Book from "../models/book.model";

export const bookRoutes = express.Router();

bookRoutes.post("/books", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body, "data");
    const result = await Book.create(body);
    res.status(201).send({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Book create Error",
      data: error,
    });
  }
});
