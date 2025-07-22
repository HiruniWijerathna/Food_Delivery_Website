import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://hiruni:4850@cluster0.wvsaily.mongodb.net/Food-Delivery')
        .then(()=>console.log("Connected DB"));
}