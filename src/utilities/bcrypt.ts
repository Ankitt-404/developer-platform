import bcrypt from "bcrypt"

const hashpassword = async(password : string) => {
    return bcrypt.hash(password, 12)
}

const comparePassword = async (password : string, hashpassword : string)=>{
    return bcrypt.compare(password, hashpassword)
}

export {hashpassword, comparePassword}