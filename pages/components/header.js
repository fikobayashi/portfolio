import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


class Header extends React.Component {
  render() {
      return(
          <div className="header">
              
                  
              <nav className="navbar navbar-expand-sm">
                  <ul className="nav nav-pills">
                {/* <ul className="navbar-nav"> */}
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/components/sobre">
                            <a className="nav-link">Sobre</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/components/contato">
                            <a className="nav-link">Contato</a>
                        </Link>
                    </li>
                    
                </ul>
              </nav>
              <div>
                  <div className="jumbotron ">

                      <h3 className="">Portfólio - Fernando I. Kobayashi</h3>
                  </div>
                  
                <h7></h7>
                <div className="label-hdr">
                    <h7>&lt; Desenvolvedor Front End /&gt;</h7>
                </div>
              </div>
          </div>
      )
  }
}

export default Header;