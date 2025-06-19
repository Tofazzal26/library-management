import mongoose from "mongoose";

interface IBorrow extends mongoose.Document {
  book: mongoose.Types.ObjectId;
  quantity: number;
  dueDate: Date;
}

const borrowSchema = new mongoose.Schema<IBorrow>({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

borrowSchema.post("save", async function (docs, next) {
  const Book = mongoose.model("Book");
  const borrowedBook = await Book.findById(docs.book);

  if (borrowedBook) {
    borrowedBook.copies = borrowedBook.copies - docs.quantity;

    if (borrowedBook.copies < 0) {
      borrowedBook.copies = 0;
    }

    await borrowedBook.save();
  }

  next();
});

const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema);

export default Borrow;
