import { Request, Response } from "express"
import prisma from "../config/prisma.js"
import { generateToken } from "../utilities/jwt.js"
import { hashpassword, comparePassword } from "../utilities/bcrypt.js"


const register = async (req : Request, res : Response ) => {
    const {username , email , password} = req.body

    if(!username  || !email  || !password){
        return res.status(400).json({
            sucess : false,
            message : "All fields are required"})
    }


const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { username },
        { email }
      ]
    }
  });

  if(existingUser){
    return res.status(400).json({message : "This username or email already exists"})
  }


const hashedPassword = await hashpassword(password);

 const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword
    },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true
    }
  });

  const token = generateToken(user.id);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      user,
      token
    }
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  const isPasswordCorrect = await comparePassword(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  const token = generateToken(user.id);

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      token
    }
  });
};

export { register, login };
