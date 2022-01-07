let nodeMailer = require("nodemailer");
require("dotenv").config();

const PASSWORD = process.env.password;
const TO_EMAIl = "bcanguven@gmail.com";
const FROM_EMAIL = "guvenbcan@gmail.com";

export default async function contact(req, res) {
  // Transporter Stores the Info of Email Server and My Account
  const transporter = nodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: FROM_EMAIL,
    to: TO_EMAIl,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  console.log(req.body);

  const result = await transporter.sendMail(mailData);

  console.log({ result });

  res.status(200);
  res.send('DONE');
}
