

const validate=(schema)=>async(req,res,next)=>{
    try{
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();

    }catch(err){
        console.log(err);

        res.status(400).json({
            msg:err
        })


    }

}
module.exports=validate

