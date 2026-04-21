import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);

router.post('/login', (req,res)=>{

    res.json({message:'Ruta de login funcionando'});
});

export default router;
