import express from "express";
import {
  googleAuth,
  googleCallback,
} from "./controllers/register.js";

const router = express.Router();

router.get("/oauth/google", googleAuth);

router.get("/oauth/google/callback", googleCallback);

router.post("/register",register)

export default router;