// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// // Create a Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'amu8968490@gmail.com',
//     pass: 'gblt douj mklx yhjm', // Use the app password generated in Step 1
//   },
// });

// // Create a POST route to send emails
// app.post('/send-email', async(req, res) => {
//   try{
//     const { to, subject, text, html } = req.body;
//       const responseEmail = await transporter.sendMail({
//         from: 'amu8968490@gmail.com',
//         to,
//         subject,
//         text,
//         html,
//       });
//     res.status(200).json({ responseEmail });
//    }catch(err){
//      res.status(400).json({err});
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js or app.js
const express = require("express");
const bodyParser = require("body-parser");
const { sendEmail } = require("./mailController.js");
const cors = require("cors");

const app = express();
const port = 3000; // or any port you prefer

app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Send email
  sendEmail(email, message, (error, response) => {
    if (error) {
      console.log("Failed to send email");
      return res.status(500).send("Failed to send email");
    }
    console.log("Email sent successfully");
    res
      .status(200)
      .send("Form submission received and email sent successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
