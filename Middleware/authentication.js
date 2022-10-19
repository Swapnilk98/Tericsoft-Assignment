const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>
{
    if(!req.headers.authorization){
        return res.send("login again")
    }
    const usertoken=req.headers.authorization.split(" ")

    jwt.verify(usertoken,"secret",(err,decoded)=>
    {
        if(err)
        {
            return res.send("login again")
        }
        req.body.email = decoded.email;
        req.body.user_Id = decoded.userId;
        next()
    })
}

module.exports=auth