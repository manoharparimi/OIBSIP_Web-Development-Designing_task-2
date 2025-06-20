const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Enable CORS for requests from localhost:3000
router.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !mobile) {
    return res.status(400).json({ status: 400, error: "All inputs required" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending email using Node.js",
      text: "Your Response Has Been Submitted",
    };

    if (preuser) {
      // User exists, append the message
      const userMessage = await preuser.Messagesave(message);
      console.log("Message saved:", userMessage);

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email Error: " + error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.status(200).json({ status: 200, message: "Message submitted successfully" });
    } else {
      // New user, create a new entry
      const finalUser = new users({
        firstName,
        lastName,
        email,
        mobile,
        messages: [{ message: message }],
      });

      const storeData = await finalUser.save();
      console.log("User saved:", storeData);

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email Error: " + error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.status(201).json({ status: 201, message: "User registered and message submitted successfully" });
    }
  } catch (error) {
    console.log("Catch error:", error);
    return res.status(400).json({ status: 400, error: "Failed to process request" });
  }
});

module.exports = router;