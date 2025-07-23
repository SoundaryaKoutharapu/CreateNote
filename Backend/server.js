import express from "express"
import route from "./src/Routes/noteRoutes.js";

const app = express();

app.use('/api/notes', route)


app.listen(5000, ()=>
{
    console.log("Server started");
    
})