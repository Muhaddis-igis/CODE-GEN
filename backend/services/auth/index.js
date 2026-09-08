import express from "express";

import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import authRouter from "./routes/router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.use(authRouter)

// Start server
app.listen(PORT||8001, () => {
  console.log(`auth running on port ${PORT}`);
});

