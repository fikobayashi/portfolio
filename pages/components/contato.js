import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import Header from "./header";
import IndexPage from "./indexPage";

class Contato extends React.Component {
    
    render() {
        function sendEmail() {
            const form = document.getElementById('form')

            form.addEventListener('submit', (e) => {
                e.preventDefault()

                const nome = document.getElementById('nome').value
                const email = document.getElementById('email').value
                const mensagem = document.getElementById('mensagem').value
                
                fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome,
                        email,
                        mensagem
                    })
                }).then((response) => {
                    console.log(response)
                    alert('Email enviado com sucesso!')
                }).catch((error) => {
                    console.log(error)
                    alert('Ocorreu um erro!')
                })
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
                            <form id="form">
                                <p>
                                    <h7>ENTRE EM CONTATO PELO FORMULÁRIO, ASSIM QUE POSSÍVEL RETORNAREMOS:</h7>
                                </p>
                                <div className="form-group">
                                    <label htmlFor="inputNome">Nome</label>
                                    <input type="text" name="nome" className="form-control" id="nome"  placeholder="Nome" required/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Seu email" required/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea className="form-control" name="mensagem" id="mensagem" rows="3" required></textarea>
                                </div>
                                <button onClick={sendEmail} className="btn btn-primary">Enviar</button>
                            </form>
                        </p>
                    </div>
                </div>
                <Footer></Footer>
                
            </div>
        )
    }
}
export default Contato;