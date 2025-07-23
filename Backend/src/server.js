import express from "express"
import route from "./Routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv'

const app = express();

app.use('/api/notes', route)

dotenv.config();
console.log(process.env.MONGO_URI);


connectDB();

app.listen(5000, ()=>
{
    console.log("Server started on Port 5000");
    
})


//KBkT0rdxK0YaQy6r
// mongodb+srv://soundaryakoutharapu:KBkT0rdxK0YaQy6r@cluster1.pcusywq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
