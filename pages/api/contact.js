let nodeMailer = require("nodemailer");
require('dotenv').config()

const PASSWORD = process.env.pasword
const TO_EMAIl = 'bcanguven@gmail.com'

export default function contact(req, res) {
    // Transporter stores the Info of Email Server and My Account
  const transporter = nodeMailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
          user: TO_EMAIl,
          pass: PASSWORD
      }
  });

  console.log(req.body);
}
