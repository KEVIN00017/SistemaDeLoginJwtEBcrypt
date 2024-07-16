import Model from './connection.js';
import bcrypt from 'bcryptjs';
import express  from 'express';

const register = async (req, res) => {
    const Username = req.body.username;
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = bcrypt.hashSync(req.body.password);
    const verification=await Model.findOne({email:Email})
    if(verification){
        res.status(400).send("Email ou Username Ja existentes!")
    }else{
    const data = new Model({
        username:Username,
        name:Name,
        email:Email,
        password:Password

    })

    try {
        const sucess = data.save()
        res.status(200).send("Sucess")
    } catch (error) {
        console.error("erro"+error)
    }

}};

export default register