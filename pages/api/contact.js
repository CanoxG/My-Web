let nodeMailer = require("nodemailer");

export default function contact(req, res) {
    // Transporter stores the Info of Email Server and My Account
  const transporter = nodeMailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
          user: 'bcanguven@gmail.com',
          pass: 'password'
      }
  });

  console.log(req.body);
}
