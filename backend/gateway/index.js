import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.use(router)

// Start server
app.listen(PORT||8000, () => {
  console.log(`Gateway running on port ${PORT}`);
});

