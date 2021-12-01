import nodemailer from 'nodemailer'

export default function (req, res) {
  require('dotenv').config()
  
  let transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL
    },
    secure: true,
  })

  const mailData = {
    from: `"Portfólio - <web>" <${process.env.USERMAIL}>`, // sender address
    to: process.env.USERMAIL, // list of receivers
    replyTo: req.body.email,
    subject: `Mensagem de ${req.body.nome}`, // Subject line
    text: req.body.mensagem + " | Enviado por: " + req.body.email, // plain text body
    html: `<div>${req.body.mensagem}</div><p>Enviado por: ${req.body.email}</p>`, // html body
    
  }

  transporter.sendMail(mailData, function(error, info) {
    if(error) 
      console.log(error)
    else
      console.log('passou por aqui', info)
   
    
  })
    
  console.log(req.body)
  res.send('sucesso')
  

}

// export default function (req, res) {
//   console.log(req.body)
// }