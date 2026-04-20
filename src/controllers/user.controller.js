import { registerService } from "../services/auth.service.js";

export function register(req, res) {
 try{

   console.log("holaaaa")
   const result = registerService(req.body);
   res.status(400).json(result);
 }catch(e){
  console.log(e)
 }
}
