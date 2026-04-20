import { dbConfig } from '../config/db.config.js';

export default async function createUser(userData)  {
  const mongoose = await dbConfig();

  const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    password: String
  }, { collection: 'users' });

  mongoose.models.users || mongoose.model('users', userSchema, 'users');


  const model = mongoose.models.user || mongoose.model('user', userSchema, 'users');
  await model.init();
  return model;
}

