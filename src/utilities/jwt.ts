import dotenv from "dotenv"
dotenv.config();

import jwt from "jsonwebtoken"

const generateToken = (userId : string ) =>{
    const secret = process.env.JWT_SECRET

    if(!secret){
        throw new Error ("JWT is not configured")
    }


return jwt.sign(
    {userId}, 
    secret,
    {expiresIn : "7d"}
)
}

export {generateToken}