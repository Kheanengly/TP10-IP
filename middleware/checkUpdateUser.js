const table=require("../db/blog/table")

const update =async (req,res,next) => {
    try {
        console.log(req.body.lastName)
       const result = await table.updateOne(
            {username:req.body.username},
            {$set:{lastName:req.body.lastName}}
        
        )
       
        console.log(result)
       
        if(result.acknowledged){
            let message ;
            if(result.modifiedCount!=0){
                message = "Update your profile already 👻🤖 📨 "
            }else{
                message = "Your new information do not update 👻🤖 ❌ "
            }

        // const data = {message:message , username : username}
            req.user = { message:message,username: req.body.username}
            
        }
       
       next();
    } catch (error) {
        res.json({
            message: error(message),
        })
    }  
};
module.exports= {update}; 