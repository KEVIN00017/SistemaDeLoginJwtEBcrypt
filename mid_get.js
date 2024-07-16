import Model from './connection.js';

const src=async(req,res)=>{
    const source=await Model.find()
    res.send(source)
}

export default src