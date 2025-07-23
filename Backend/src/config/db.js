import mongoose from "mongoose"

export const connectDB = async()=>
{
    try {
        await mongoose.connect("mongodb+srv://soundaryakoutharapu:KBkT0rdxK0YaQy6r@cluster1.pcusywq.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster1")
           console.log("DB connected successfully");
                   
    } catch (error) {
        console.log("failed to connect", error);
        process.exit(1);
    }
}