import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
const saltRounds=10
export async function loginService() {
    return { message: "service de prueba" };
}

export async function registerService(userData) {
    try {
        const hashedpass = await bcrypt.hash(userData.password, saltRounds);
        const User = await userModel();
        const nuevoUsuario = new User({
            nombre: userData.nombre,
            apellido: userData.apellido,
            email: userData.email,
            password: hashedpass
        });

        await nuevoUsuario.save();
    console.log("userdoto",userData)

        return {
            status: 201,
            message:"usuario guardado"
        }
    } catch (e) {
        console.log("errorcito",e)
       console.log("usuario del problema", userData.email)
        return {
            status: 409,
            message:"usuario NO guardado"
        }
    }
}