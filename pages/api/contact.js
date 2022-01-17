import nodeMailer from "nodemailer";


// Assign a Variable to Our Password & E-mail
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL
const FROM_EMAIL = process.env.FROM_EMAIL

export default async function contact(req, res) {
  // Checking Heroku Log to See the EVN files
  console.log({ PASSWORD, TO_EMAIL, FROM_EMAIL })


  if (req.method === "POST") {
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
      to: TO_EMAIL,
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
    status: 200,
    message: "no data",
  });
}
