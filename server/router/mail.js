const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const app = express();


router.post("/mail", async (req, res) => {
  const { name, email, message } = req.body;
  async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 465,
      auth: {
        user: "92faa97f57704e", // generated ethereal user
        pass: "9c9488af185151", // generated ethereal password
      },
    });

    const options={
        from: "ayush.3316403221@ipu.ac.in", // sender address
        to: "test@test.test", // list of receivers
        subject: "Hello ✔", // Subject line
        text: `${message}`, // plain text body
    }
    // send mail with defined transport object
     await  transporter.sendMail(options);

/*     console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... */
  }

});
module.exports=router;
