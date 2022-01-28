import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare  } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

class Footer extends React.Component {
    
    render() {
        
        return (
            <div className="footer">
                <nav className="navbar navbar-expand-sm">
                    <ul className="navbar-nav">
                        <li className="nav-item link-face">
                            <Link href="https://www.facebook.com/fernando.i.kobayashi/">
                                <a className="nav-link">
                                    <FaFacebookSquare className="app-logo"/>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item link-linkedin">
                            <Link href="https://www.linkedin.com/in/fernando-i-kobayashi/">
                                <a className="nav-link">
                                    <FaLinkedin className="app-logo"/>
                                </a>
                            </Link>
                         </li>
                        <li className="nav-item link-git">
                            <Link href="https://github.com/fikobayashi">
                                <a className="nav-link">
                                    <FaGithubSquare className="app-logo"/>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='title-footer'>
                      <h7>Idealizado por Fernando I. Kobayashi - &copy;2021</h7>
                      
                </div>
            </div>
        )
    }
}
export default Footer;
