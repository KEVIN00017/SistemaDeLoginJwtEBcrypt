import Model from './connection.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


const login=async(req,res)=>{

const user=req.body.email
const password=req.body.password;

const verificationEMAIL=await Model.findOne({email:user});


const verificationSENHA=await bcrypt.compareSync(password,verificationEMAIL.password);
console.log(verificationSENHA)
if(!verificationEMAIL){
 
    res.status(400).send("USERNAME OU SENHA INCORRETOS!");
}
else if(verificationSENHA==false){
  
    res.status(400).json("USERNAME OU SENHA INCORRETOS!");
}
else{
  
    const token=jwt.sign(verificationEMAIL.username,process.env.SECRET)

   
   
    res.header("Authorization",token)
    res.status(200).send({message:"LOGADO COM SUCESSO!",token}); 
}

};

export default login
