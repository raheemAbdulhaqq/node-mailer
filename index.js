const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
})

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "raheemabdulhaqq2020@gmail.com, famuyide.funke@yahoo.com",
    subject: "Sending email to mulitple receivers using node.js",
    text: "This is pretty cool"
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(`Email sent ${info.response}`)
    }
})