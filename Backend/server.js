import express from "express"
import router from "./src/Routes/noteRoutes";

const app = express();

app.use('/api/notes', router)


app.listen(5000, ()=>
{
    console.log("Server started");
    
})