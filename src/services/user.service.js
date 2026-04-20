import userModel from "../models/user.model.js";

export function registerService(data) {
  return { message: "Servicio de registro funcionando", model: userModel(data) };
}
