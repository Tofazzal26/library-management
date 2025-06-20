import express, { Request, Response } from "express";
import Borrow from "../models/borrow.model";
export const borrowRoutes = express.Router();
// borrow book copies oparation finish
borrowRoutes.post("/borrow", async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;
    const borrow = await Borrow.create({ book, quantity, dueDate });
    res.status(201).send({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "borrow book error",
      data: error?.message,
    });
  }
});
