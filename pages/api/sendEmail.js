// const nodemailer = require('nodemailer')
import nodemailer from 'nodemailer'
import config from '../../config.local'

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL
    }
  })

  transporter.sendMail({
    from: `"Portfólio - <web>" <${config.USERMAIL}>`, // sender address
    to: config.USERMAIL, // list of receivers
    replyTo: req.body.email,
    subject: "CONTATO ATRAVÉS DO SITE", // Subject line
    text: req.body.mensagem, // plain text body
    html: `<b>${req.body.nome}</b><br />${req.body.mensagem}`, // html body
  }).then((response) => { res.send(response)})
    .catch((error) => {res.send(error)})

}
