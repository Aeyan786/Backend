import express from "express"
import { connectDB } from "./Database/Database.js"
import userRoutes from "./router/routes.js";
import cors from "cors"


const app = express()

const PORT = 3000

// Middle Ware

app.use(express.json())
app.use("/app", userRoutes)
app.use(cors())

connectDB()

app.listen(PORT, () => {
    console.log("Server is running")
})