import { dbConfig } from '../config/db.config.js';

export default function createUser(userData)  {

  console.log("Mario")
  // Lógica para crear un usuario
  // Por ejemplo, validar datos y devolver un objeto usuario
  if (!userData.name || !userData.email) {
    throw new Error('Nombre y email son requeridos');
  }
  return {
    id: Date.now(), // ID simple basado en timestamp
    name: userData.name,
    email: userData.email,
    createdAt: new Date(),
    dbStatus: dbConfig()
  };
}

