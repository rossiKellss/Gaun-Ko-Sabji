const nodemailer=require('nodemailer');
const sendConfirmationCode=async(code,receiverMail)=>{
    console.log(receiverMail)
    try{
        const transporter=nodemailer.createTransport({
            service:"Gmail",
            secure:true,
            port:465,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions={
            from:process.env.EMAIL_USER,
            to:receiverMail,
            subject:"Confirmation Code",
            text:`Your security code is ${code}. Don't share this with anyone.`
        }
        transporter.sendMail(mailOptions,(error,emailResponse)=>{
            if(error){
                throw error;
            }
            console.log("Success",emailResponse);
        });
        return true;
        
    }
    catch(err){
        console.log("couldnt send the message")
        console.log(err)
    }
}

module.exports=sendConfirmationCode
