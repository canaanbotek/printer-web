const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
require("dotenv").config()

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza con el puerto donde corre tu frontend
}));

// Configuración de multer para subir archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", upload.single("file"), (req, res) => {
  const { email, message } = req.body;
  const file = req.file;

  // if (!file) {
  //   return res.status(400).send("No se ha cargado un archivo.");
  // }

  // Construir el contenido del mensaje
  const emailContent = `
    Email del remitente: ${email}
    
    Mensaje:
    ${message}
  `;

  const mailOptions = {
    from: email,
    to: "tresdindustry@gmail.com",
    subject: "Nueva Consulta",
    text: emailContent,
    attachments: file
      ? [
          {
            filename: file.originalname, // El nombre original del archivo
            content: file.buffer,        // El contenido del archivo en memoria
            encoding: "base64",          // Aseguramos que el archivo esté en formato adecuado para ser enviado
          },
        ]
      : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error en el envío");
    }
    res.status(200).send("Correo enviado");
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
