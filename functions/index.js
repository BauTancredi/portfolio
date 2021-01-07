const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions;
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.query;

    mailOptions = {
      headers: {
        priority: "high",
      },
      from: "Portfolio",
      to: "bautistatancredi@hotmail.com",
      subject: "Mensaje recibido desde el Portfolio",
      html: `
        <p style="font-size: 16px">Nombre: ${name}</p>
        <p style="font-size: 16px">Email: ${email}</p>
        <p style="font-size: 16px">Mensaje: ${message}</p> `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent succesfully");
      }
    });
  });
});
