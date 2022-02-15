import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const { OAuth2 } = google.auth;

const email = process.env.USERMAIL

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2_client = new OAuth2(clientId, clientSecret)
OAuth2_client.setCredentials({ refresh_token: refreshToken })

const accessToken = OAuth2_client.getAccessToken();

export default async (req, res) => {
  require('dotenv').config()
  
  let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: email,
      clientId,
      clientSecret,
      refreshToken,
      accessToken
    }
    
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
