import jwt from 'jsonwebtoken'
export function createToken(userInfo){
    const token=jwt.sign(userInfo, process.env.tokenKey)
    return token
}