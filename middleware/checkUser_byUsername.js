const table = require("../db/blog/table");

const checkuser_byUsename = async(req,res,next) => {
    let user = await table.find({username: req.body.username});
    try {
        // console.log(user[0].username)
        if(user[0]!=null) {
            // console.log(user[0].username)
            req.user = {message:req.body}
            next();
        }else{
            res.status(402).send("Username not avalible ❌🦹🏾");
        }
          
        // req.user = {"data" : data}
       
    } catch (error) {
        res.json({
            message: "Username not avalible ❌🦹🏾",
        })
    }
   
}

module.exports = {checkuser_byUsename}