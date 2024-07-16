import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import register from './mid_register.js';
import login from './mid_login.js';
import src from './mid_get.js';
import del from './mid_delete.js';

dotenv.config();


const app=express();

app.use(cors());
app.use(express.json());

const router = express.Router();
const PORT=process.env.PORT;




router.post("/register",register);
router.post("/login",login)
router.delete("/:ID",del)

app.use("/",router)

app.listen(PORT,()=>{
    console.log("Running Server!")
})