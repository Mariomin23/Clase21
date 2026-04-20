import express from "express";
import userRouter from "./src/routes/user.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente", status: "ok" });
});

app.get("/ping", (req, res) => {
  res.json({ pong: true, timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
