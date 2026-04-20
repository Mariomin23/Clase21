import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Ruta de registro funcionando" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Ruta de login funcionando" });
});

export default router;
