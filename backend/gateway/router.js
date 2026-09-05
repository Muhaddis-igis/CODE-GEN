import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = express.Router()

router.use("/api/auth",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  }),
)

export default router