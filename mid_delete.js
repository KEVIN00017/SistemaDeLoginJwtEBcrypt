import Model from './connection.js'

const del=async(req,res)=>{
    const index=req.params.ID;

    const user=await Model.findOne({_id:index})
    console.log(user.username)
    try {
        const deletar=await Model.deleteOne({_id:index})
        res.send("DELETADO COM SUCESSO!")
    } catch (error) {
        console.error(error)
    }
}
export default del