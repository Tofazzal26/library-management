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

bookRoutes.get("/books", async (req: Request, res: Response) => {
  try {
    const filterBook = req?.query?.filter as string;
    const sortBy = (req?.query?.sortBy as string) || "createdAt";
    const sort = req?.query?.sort === "desc" ? -1 : 1;
    const limit = req?.query?.limit as string;
    const numberLimit = parseInt(limit) || 10;
    let query: any = {};
    if (filterBook) {
      query.genre = filterBook;
    }
    const sortFilter: any = {};
    sortFilter[sortBy] = sort;
    const result = await Book.find(query).sort(sortFilter).limit(numberLimit);
    res.status(201).send({
      success: true,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Book Get Error",
      data: error,
    });
  }
});
