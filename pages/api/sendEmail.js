import nodemailer from "nodemailer";

// should read the value from env file
// you need to generate this password from you google accounts
const GMAIL_PASSWORD = "pywxlznnakvaykyb";

export default async (req, res) => {
  // all the required data is extracted from incoming request
  const { recipient, name, lastName, phoneNumber, email, subject, message } =
    req.body;

  // aggregated all the data in single variable to email
  const finalFormattedMessage = `
    Name: ${name} ${lastName}\n
    Phone Number: ${phoneNumber}\n
    Email: ${email}\n
    message: ${message}
    `;

  // connected less secure gmail server with email credentials
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "vajresh005@gmail.com",
      pass: GMAIL_PASSWORD,
    },
  });

  // data to be send
  let mailOptions = {
    from: "vajresh005@gmail.com",
    to: recipient,
    subject: subject,
    text: finalFormattedMessage,
  };

  // email message is send and appropriate response is provided to the client
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json({ "Error: ": err });
    } else {
      res.json({ "Success: ": info.response });
    }
  });
};
