export function authMiddleware(req, res, next){
    const token=req.headers.authorization;
    if(!token)res.status(401).send("Error de token")
    next();
}