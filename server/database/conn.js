import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://rudrasmongodb:9876@quiz.ftyy5cl.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}