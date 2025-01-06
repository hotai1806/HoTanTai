import { Router } from "express";
import resourceRoutes from "./resource.routes";

const router = Router();

router.use("/resources", resourceRoutes);

// Health check route
router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date(),
    uptime: process.uptime(),
  });
});
export default router;
