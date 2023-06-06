const table=require("../db/blog/table")
const update =async (req,res,next) => {
    try {

        // console.log(req.body)
        // const check_name = table.findOne({username: req.body.username})
        // console.log(check_name) 
        // console.log(req.user)
        // console.log(req.user.message.username)
        console.log(req.body)
       const result = await table.updateMany(
            {username:req.body.username},
            {$set:req.body}
        
        )
       
        console.log(result)
       
        if(result.acknowledged){
            let message ;
            let scucess ;
            if(result.modifiedCount!=0){
                message = " 🎉  Update your profile already 📩 🤖  🎉 "
                scucess = true
            }else{
                message = "❌  Your new information do not update 👻🤖  ❌ "
                scucess = false
            }

        // const data = {message:message , username : username}
            req.user = { message:message,username: req.body.username,scucess:scucess}
            
        }
       
       next();
    } catch (error) {
        res.json({
            // message: error(message),
            scucess : false,
        })
    }  
};
module.exports= {update}; 