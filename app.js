import express from "express";
import { connectDB } from "./Database/Database.js";
import userRoutes from "./router/routes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/app", userRoutes);

// Connect to DB then start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
