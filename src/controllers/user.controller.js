import { registerService } from "../services/auth.service.js";

export async function register(req, res) {
 try{

   console.log("holaaaa")
   const result = await registerService(req.body);
   res.status(result.status).json(result.message);
 }catch(e){
  console.log(e)
 }
}
