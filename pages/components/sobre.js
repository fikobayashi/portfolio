import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import Header from "./header";
import IndexPage from "./indexPage";

class Sobre extends React.Component {

    render() {
        return(
            <div className="bg-color">
                <IndexPage></IndexPage>
                <Header></Header>
                <div className="container cont-2 mt-5">
                    <div className="row">
                        <h2>&lt; Sobre /&gt;</h2>
                        <div id="sobre-onde"><h5>&lt; Onde Trabalhou /&gt;</h5></div>
                        <p>
                            -&nbsp; Freelancer atualmente - Desenvolvedor Front End <br />
                            &nbsp;&nbsp;&nbsp;Desenvolvimento de soluções Front End<br />                           
                            <p>
                                -&nbsp; Stefanini Consulting 04/2014 a 03/2017 - Analista programador<br/>
                                &nbsp;&nbsp;&nbsp;Análise e Programação Mainframe – programação em COBOL, COBOL CICS, VSAM e DB2, JCL;<br/>
                                &nbsp;&nbsp;&nbsp;Ferramentas e ambientes para desenvolvimento: TSO, Changeman, MFE 2.5;<br/>
                            </p>
                                -&nbsp; Brothers&Others Informatica (B&O) 05/2000 a 03/2014 - Analista Documentador / Consultor<br/>
                                &nbsp;&nbsp;&nbsp;Análise de Sistemas e Programação Mainframe (Fábrica);<br/>
                                &nbsp;&nbsp;&nbsp;BRADESCO - desenvolvimentos de sistemas: Contas, Estatística, Depósitos, Interface CICS;<br/>
                            <p>
                                -&nbsp; Projeto RO (Registro de Ocorrências) – Bradesco / Alphaville 10/1999 a 04/2000 - Consultor<br/>
                                &nbsp;&nbsp;&nbsp;Implantação e levantamento junto aos usuários do RO (grupos do Desenvolvimento) das necessidades e melhorias;<br/>
                            </p>
                                -&nbsp; Comet Sistemas Ltda 09/1997 a 09/1999 - Consultor<br/>
                                &nbsp;&nbsp;&nbsp;Documentação de Sistemas em Cobol / Cobol CICS  e JCL.

                        </p>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Sobre;