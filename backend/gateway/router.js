import express from "express";
import proxy from "express-http-proxy";

const router = express.Router();

router.use(
  "/api/auth",
  proxy("http://localhost:8001")
);

router.use(
  "/api/ai",
  proxy("http://localhost:8002")
);

router.use(
  "/api/projects",
  proxy("http://localhost:8003")
);

router.use(
  "/api/files",
  proxy("http://localhost:8004")
);

export default router;