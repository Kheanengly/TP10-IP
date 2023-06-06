const table=require("../../db/blog/table")
const jwt = require("jsonwebtoken");
const updateUser =async (req,res,next) => {
    try {
        console.log(req.user)
        if(req.user.scucess) {
            const data = await table.findOne({username : req.user.username});
            const token = jwt.sign({
                id:data.id,
                username:data.username,
                email:data.email,
                password : data.password}, 
                "YOUR_SECRET_KEY");
            res.json({message : req.user,token: token})
        }else{
            res.json({message : req.user,})
        }
        
    } catch (error) {
        res.json({
            message: "error",
        })
    }  
};
module.exports= {updateUser}; 