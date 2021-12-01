import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import Header from "./header";
import IndexPage from "./indexPage";

export default function Contato() {

    const [nome, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando')
    
        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                mensagem
            })
        }).then((res) => {
            
            if (res.status === 200) {
                console.log(res.status, 'Envio com sucesso')
                // alert('Email enviado com sucesso!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')

                
    
            }
            
        }).catch((error) => {
            console.log(error)
            alert('Ocorreu um erro!')
        })
    }
   
    return (
        <div className="bg-color">
            <IndexPage></IndexPage>
            <Header></Header>
            <div className="container cont-3 mt-5">
                <div className="row">
                    <h2>&lt; Contato /&gt;</h2>
                    <p>
                        <form onSubmit={(e) => { handleSubmit(e) }} id="form">
                            <p>
                                <h7>ENTRE EM CONTATO PELO FORMULÁRIO, ASSIM QUE POSSÍVEL RETORNAREMOS:</h7>
                            </p>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" 
                                    name="nome" 
                                    onChange={(e) => { setName(e.target.value) }} 
                                    className="form-control" 
                                    id="nome" placeholder="Nome" value={ nome } required/>
    
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" 
                                    name="email" 
                                    onChange={(e) => { setEmail(e.target.value) }} 
                                    className="form-control" 
                                    id="email" placeholder="Seu email" value={ email } required/>
    
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea className="form-control" 
                                    onChange={(e) => { setMessage(e.target.value) }} 
                                    name="mensagem" id="mensagem" rows="3" 
                                    value={ mensagem } required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            {/* < input type='submit' /> */}
                        </form>
                    </p>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )

}


    
    
    

