const mongoose=require('mongoose');

const connectToDb=(url)=>{
    mongoose.connect(url).then(()=>{console.log("db connected")}).catch((err)=>console.log("some err happened"));


}

module.exports=connectToDb;