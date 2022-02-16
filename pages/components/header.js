import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Header() {
    const [state, setState] = useState(false)
    
    useEffect(() => {

                
        let show = true;
  
        const menuSection = document.querySelector(".menu-section")
        const menuToggle = menuSection.querySelector(".menu-toggle")
  
        menuToggle.addEventListener("click", () => {
  
            document.body.style.overflowY = show ? "scroll" : "initial"
            menuSection.classList.toggle("on", show)
            show = !show;
            
            
        })
        setState(true)
        
                
    }, [state]);

     
    return (
        
        <div className="header">
           
            <div className="menu-section">
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
                        
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </div>
            <div>
                <div className="jumbotron ">

                    <h3 className="label-nome">Portfólio - Fernando I. Kobayashi</h3>
                </div>
                
                <h7></h7>
                <div className="label-hdr">
                    <h7>&lt; Desenvolvedor Front End /&gt;</h7>
                </div>
            </div>
        </div>
    )
}

