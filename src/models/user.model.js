import { dbConfig } from '../config/db.config.js';

export default async function createUser(userData)  {
  const mongoose = await dbConfig();

  const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    password: String
  });

  console.log("Mario")
  return {
    id: Date.now(),
    name: userData.name,
    email: userData.email,
    createdAt: new Date()
  };
}

