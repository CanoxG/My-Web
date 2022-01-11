import nodeMailer from 'nodemailer';


// Assign a Variable to Our Password & E-mail
const PASSWORD = process.env.PASSWORD || 'TanoxCanox1903';
const TO_EMAIl = process.env.TO_EMAIL || 'bcanguven@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'guvenbcan@gmail.com';

export default async function contact(req, res) {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "*");
  // res.setHeader("Access-Control-Allow-Headers", "*");
  console.log({ PASSWORD, TO_EMAIl, FROM_EMAIL })

  if (req.method === 'POST') {
    const transporter = nodeMailer.createTransport({
      // Transporter Stores the Info of SMTP Server and Sender Account
      host: "smtp.gmail.com",
      secure: true,

      auth: {
        user: FROM_EMAIL,
        pass: PASSWORD,
      },
    });

    // We Create a Mail Model
    const mailData = {
      from: FROM_EMAIL,
      to: TO_EMAIl,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
    };

    const date = new Date();
    console.log("New mail", date);
    console.log(req.body);

    // Send Mail with Defined Transport Object
    const result = await transporter.sendMail(mailData);

    console.log({ result });

    res.status(200);
    return res.send("DONE");
  }

  return res.status(200).json({
    status: 200, message: "no data"
  })
}
