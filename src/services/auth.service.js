import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createToken } from "./token.service.js";

const saltRounds = 10;

export async function registerService(userData) {
  try {
    const hashedpass = await bcrypt.hash(userData.password, saltRounds);
    const user = await userModel();
    const nuevoUsuario = await new user({
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email,
      password: hashedpass,
    });

    nuevoUsuario.save();

    return {
      status: 201,
      message: "usuario guardado",
    };
  } catch (e) {
    console.log(e);
    return {
      status: 409,
      message: "usuario NO guardado",
    };
  }
}

export async function loginService(userData) {
  try {
    const { email, password } = userData;
    const user = await userModel();
    const usuario = await user.findOne({ email });
    if (!usuario) return { status: 404, message: "Usuario o clave incorrecto" };

    const compare = await bcrypt.compare(password, usuario.password);
    if (!compare) return { status: 404, message: "Usuario o clave incorrecta" };
    const userInfo = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.email,
    };
    const token = createToken(userInfo);
    return {
      status: 200,
      message: { usuario, token },
    };
  } catch (e) {
    return {
      status: 401,
      message: e.message,
    };
  }
}
export async function userInfoService(userData) {
  console.log("prueba");
  const { email, password } = userData;
  const user = await userModel();
  const usuario = await user.findOne({ email });
  if (!usuario) return { status: 404, message: "usuario no encontrado" };
  const userInfo = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    correo: usuario.email,
  };
  return {
    status: 200,
    message: userInfo,
  };
}
