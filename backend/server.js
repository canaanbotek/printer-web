const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuemail@gmail.com",
    pass: "tucontraseña",
  },
});

app.post("/send-email", (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "empresa@tucorreo.com",
    subject: "Nueva Consulta",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error en el envío");
    }
    res.status(200).send("Correo enviado");
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
