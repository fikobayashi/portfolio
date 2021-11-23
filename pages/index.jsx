import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Footer from "./components/footer";
import IndexPage from "./components/indexPage";

function Home() {
  
    return (
      <div className="bg-color">
        <IndexPage></IndexPage>
        <Header></Header>
        <div className="container mt-5 ">
          <div className="row">
            <h2>&lt; Formação /&gt;</h2>
            <p className="scroll">
              <div id="home-curso">
                  Cursou Sistemas de Informação na Faculdade UNIFIEO - Osasco / SP (2001 - 2004).
              </div>
              
              <div id="home-compl">
                <h5>&lt;Cursos Complmentares/&gt;</h5>
                <p>
                    - Desenvolvimento Web - JavaScript/TypeScript/Angular - Udemy<br/> 
                    - Desenvolvedor NodeJs e MongoDB - Udemy <br/>
                    - Html5, JavaScript, Css3, Bootstrap - Udemy <br/>
                    - NextJs e React - Baseados em Projetos - Cod3r<br/> 
                    - Aprenda Flutter e Dart - Construa Apps IOS e Android - Cod3r <br/>
                    - HTML5, CSS3, JavaScript, JQuery, Bootstrap, PHP 7 - Portal TIM Tec <br/>
                </p>
              </div>
            </p>
          </div>
        </div>
        <Footer></Footer> 
      </div>
    )
}

export default Home;
