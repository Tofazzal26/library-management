import mongoose from "mongoose";
import app from "./app";

const PORT = 4000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rgxjhma.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0`
    );

    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
  }
}

main();
