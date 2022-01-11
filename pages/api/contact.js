import nodeMailer from 'nodemailer';


// Assign a Variable to Our Password & E-mail


export default async function getServerSideProps(req, res) {
  console.log({ PASSWORD, TO_EMAIl, FROM_EMAIL })

  if (req.method === 'POST') {
    const transporter = nodeMailer.createTransport({
      // Transporter Stores the Info of SMTP Server and Sender Account
      host: "smtp.gmail.com",
      secure: true,

      auth: {
        user: process.env.FROM_EMAIL ,
        pass: process.env.PASSWORD ,
      },
    });

    // We Create a Mail Model
    const mailData = {
      from: process.env.FROM_EMAIL ,
      to: process.env.TO_EMAIL ,
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
