// mailController.js
const nodemailer = require("nodemailer");
require("dotenv").config();
// Create a transporter object using your email service
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bhagatalisha1@gmail.com", // your email
    pass: "rggyenntyjfrhoak", // your email password
  },
});

// Send email function
const sendEmail = (email, message, callback) => {
  const mailOptions = {
    from: { name: "Portfolio_Mail", address: "bhagatalisha1@gmail.com" }, // sender address
    to: "bhagatalisha1@gmail.com", // list of receivers
    subject: email, // Subject line
    text: message, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, info.response);
  });
};

module.exports = { sendEmail };
