const createUser = (request,response)=>{// Request comes from the user 
    const data = request.body;
    console.log('data',data);
  return response.status(200).send(data);
  
}
const delet = (req,res)=>{

}
const findone = (req,res)=>{
    res.send("hello world");
  }
module.exports ={
    createUser,
    delet,
    findone
}