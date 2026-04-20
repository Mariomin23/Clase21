import mongoose from 'mongoose';
import 'dotenv/config';

export async function dbConfig() {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Conexión a MongoDB establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
  }
}
