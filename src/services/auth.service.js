import userModel from '../models/user.model.js'

export async function registerService(userData){
const user= await userModel();
return user.find({});
}
export async function registerService(userData) {
    console.log(userData)
    try {
        const hashedpass = await bcrypt.hash(userData.password, saltRounds);
        const user = await userModel();
        const nuevoUsuario = await new user({
            nombre: userData.nombre,
            apellido: userData.apellido,
            email: userData.email,
            password: hashedpass
        });

        nuevoUsuario.save();

        return {
            status: 201,
            message:"usuario guardado"
        }
    } catch (e) {
        console.log(e)
        return {
            status: 409,
            message:"usuario NO guardado"
        }
    }
}