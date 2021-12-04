import nodemailer from 'nodemailer'

export default async (req, res) => {
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

  await new Promise((resolve, reject) => {
    // verifica configuração das conexões
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Servidor pronto");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: `"Portfólio - <web>" <${process.env.USERMAIL}>`, // sender address
    to: process.env.USERMAIL, // list of receivers
    replyTo: req.body.email,
    subject: `Mensagem de ${req.body.nome}`, // Subject line
    text: req.body.mensagem + " | Enviado por: " + req.body.email, // plain text body
    html: `<div>${req.body.mensagem}</div><p>Enviado por: ${req.body.email}</p>`, // html body
    
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, function(error, info) {
      if(error) {
        console.log(error)
        reject(err)
      } else { 
        console.log('passou por aqui', info)
        resolve(info)
      }
     
      
    })
    
  });
    
  console.log(req.body)
  res.send('sucesso')
  

}

// export default function (req, res) {
//   console.log(req.body)
// }