import { registerService } from "../services/user.service.js";

export function register(req, res) {
  const result = registerService(req.body);
  res.json(result);
}
