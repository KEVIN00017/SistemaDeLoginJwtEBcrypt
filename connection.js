import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const IP=process.env.MONGO_IP
mongoose.connect("mongodb+srv://silvakev08:kevin123@cluster0.efvw2ig.mongodb.net/");


const Model = mongoose.model("CrudNovo", ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
}));

export default Model