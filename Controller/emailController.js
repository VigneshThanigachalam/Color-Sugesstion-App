import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
export const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vigneshthanika03@gmail.com", // generated ethereal user
      pass: "iqvupukrkfbugsjt", // generated ethereal password
    },
  });
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASSWORD);
console.log(process.env.EMAIL_USER);
  // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: `vigneshthanika03@gmail.com`, // sender address
//     to: `vigneshthanika03@gmail.com`, // list of receivers
//     subject: "data.subject", // Subject line
//     html: "data.html", // html body
//   });
  const mailOption= {
    from: "vigneshthanika03@gmail.com", // sender address
    to: "vigneshthanika03@gmail.com", // list of receivers
    subject: "datasubject", // Subject line
    text: "datahtml", // html body
  }
  transporter.sendMail(mailOption, (error, info)=>{
  if(error){
  console.log(error)
  }
    else{
    console.log("hi"+info.response)
    }
  })
  console.log("info")
});
