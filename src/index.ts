import dotenv from "dotenv"
dotenv.config()
import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";
import projectRouter from "../src/routes/project.routes.js"
import analysisRoutes from "./routes/analysis.routes.js"
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Developer Platform API is running 🚀"
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRouter)
app.use("/api/v1/projects", projectRouter)
app.use("/api/v1/", analysisRoutes)


const port  = Number(process.env.PORT) || 3000


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})

export default app;