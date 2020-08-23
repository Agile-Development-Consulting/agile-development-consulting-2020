const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

//**********************************//
//      SAY HELLO WITH NODEMAILER   //
//**********************************//

router.post("/api/mail", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.MY_EMAIL_ADDRESS,
    subject: `Message from ${req.body.email}`,
    html: `${req.body.message}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to send message. Please try again. ",
      });
    } else {
      console.log("Message sent: " + info.response);
      res.json({
        error: false,
        data: info.response,
        message: "Successfully sent your message. We'll be in touch soon!",
      });
    }
  });
});

module.exports = router;
