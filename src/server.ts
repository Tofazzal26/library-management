import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const PORT = 4000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rgxjhma.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("✅ Mongoose Connect Successfully");
    server = app.listen(PORT, () => {
      console.log(`App is listen on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
