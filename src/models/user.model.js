import { dbConfig } from '../config/db.config.js';

export default async function createUser() {
  const mongoose = await dbConfig();

  const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, trim: true, lowercase: true },
    password: { type: String, required: true }
  }, { collection: 'usuarios' });

  userSchema.index({ email: 1 }, {
    unique: true });

  const modelName = 'usuarios';
  const model = mongoose.models[modelName] || mongoose.model(modelName, userSchema, 'usuarios');
  await model.init();
  await model.createIndexes();
  return model;
}

