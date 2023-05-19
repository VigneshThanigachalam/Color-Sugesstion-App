import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
export const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
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
  
  console.log("info")
});
