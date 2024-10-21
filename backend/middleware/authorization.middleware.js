const isAdmin=(...params)=>{
    return(req,res,next)=>{
        if(!req?.user||!params.includes(req.user?.role)){
           return res.status(403).json({
                success:false,
                message:"Access denied"
            })
        }
        next();

    }

}

module.exports=isAdmin;