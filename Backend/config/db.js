import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Hiruni:12341234@cluster0.yhfubel.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}