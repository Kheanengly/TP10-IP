const table=require("../../db/blog/table")
const jwt = require("jsonwebtoken");
const updateUser =async (req,res,next) => {
    try {
        // console.log(req.user)
        const data = await table.find({username : req.user.username});
        const token = jwt.sign({
            id:data.id,
            username:data.username,
            email:data.email,
            password : data.password}, 
            "YOUR_SECRET_KEY");
        res.json({message : req.user,token: token})
    } catch (error) {
        res.json({
            message: error(message),
        })
    }  
};
module.exports= {updateUser}; 