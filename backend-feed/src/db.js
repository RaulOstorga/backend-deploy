import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://Project18:ObOy9pDBmCxbvUF3@vendotodo.naddund.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>> DB is connected")
    } catch (error){
        console.log(error);
    }
};